import type {
  HttpMethods,
  StandardModelApi,
  RequestParameterPosition,
  JSONSchema,
  MediaType,
  ResponseCode,
  StandardModel,
} from '@apiweaver/core';
import { groupBy } from 'lodash/fp';

import type {
  ParameterObject,
  RequestBodyObject,
  ResponseObject,
  ReferenceObject,
  OperationObject,
  PathsObject,
  OpenAPIV3_JSON,
  SchemaObject,
} from './type';
import { isChinese, transformCamelCase } from '../utils';
import { type ParseOptions } from '../type';

const httpMethods: HttpMethods[] = [
  'get',
  'put',
  'post',
  'delete',
  'options',
  'head',
  'patch',
];

const requestParameterPosition: RequestParameterPosition[] = [
  'header',
  'path',
  'query',
];

/**
 * 不处理 parameters, requestBody, responses 中的 ReferenceObject 情况。
 */
function isReferenceObject(
  object:
    | ParameterObject
    | RequestBodyObject
    | ResponseObject
    | SchemaObject
    | ReferenceObject,
): object is ReferenceObject {
  return typeof (<ReferenceObject>object).$ref !== 'undefined';
}

function parametersParse(
  parameters: OperationObject['parameters'],
): StandardModelApi['parameters'] {
  if (!parameters?.length) return undefined;

  const standardModelApiParameters: StandardModelApi['parameters'] = {};

  const group = groupBy('in', parameters);

  requestParameterPosition.forEach((position) => {
    if (!Array.isArray(group[position])) return;

    const schema: JSONSchema = {
      type: 'object',
      title: position,
      required: [],
    };

    group[position].forEach((parameter) => {
      if (!isReferenceObject(parameter)) {
        if (parameter.required) {
          schema.required?.push(parameter.name);
        }

        schema.properties = {
          ...schema.properties,
          [parameter.name]: {
            description: parameter.description,
            ...parameter.schema,
          } as JSONSchema,
        };
      }
    });

    standardModelApiParameters[position] = schema.properties
      ? { schema }
      : undefined;
  });

  return standardModelApiParameters;
}

function requestBodyParse(
  requestBody: OperationObject['requestBody'],
): StandardModelApi['requestBody'] {
  if (!requestBody) return undefined;
  if (isReferenceObject(requestBody)) return undefined;
  if (!requestBody.content) return undefined;

  const standardModelApiRequestBody: StandardModelApi['requestBody'] = {};

  Object.entries(requestBody.content)
    .filter((_) => !!_)
    .map(([media, mediaTypeObject]) => {
      standardModelApiRequestBody[media as MediaType] = mediaTypeObject.schema
        ? {
            schema: {
              type: 'object',
              title: 'body',
              ...(isReferenceObject(mediaTypeObject.schema)
                ? { items: { $ref: mediaTypeObject.schema.$ref } }
                : mediaTypeObject.schema),
            } as JSONSchema,
          }
        : undefined;
    });

  return standardModelApiRequestBody;
}

function responsesParse(
  responses: OperationObject['responses'],
): StandardModelApi['responses'] {
  if (!responses) return undefined;

  const standardModelApiResponses: StandardModelApi['responses'] = {};

  Object.entries(responses).forEach(([code, response]) => {
    if (!response) return;

    if (!isReferenceObject(response)) {
      if (!response.content) return;

      Object.entries(response.content).forEach(([media, responseObject]) => {
        if (!responseObject) return;

        standardModelApiResponses[code as ResponseCode] = {
          ...standardModelApiResponses[code as ResponseCode],
          [media as MediaType]: responseObject.schema
            ? {
                schema: {
                  type: 'object',
                  title: 'response',
                  description: response.description,
                  ...(isReferenceObject(responseObject.schema)
                    ? { items: { $ref: responseObject.schema.$ref } }
                    : responseObject.schema),
                } as JSONSchema,
              }
            : undefined,
        };
      });
    }
  });

  return standardModelApiResponses;
}

function pathParse(
  pathsObject: PathsObject,
  tags: OpenAPIV3_JSON['tags'],
  options?: ParseOptions,
): StandardModelApi[] {
  if (!pathsObject) return [];

  const standardModelApis: StandardModelApi[] = [];

  const paths = Object.keys(pathsObject).filter((path) => {
    return options?.filterPath?.(path) ?? true;
  });

  paths.forEach((path) => {
    const pathItem = pathsObject[path];

    httpMethods.forEach((method) => {
      if (!pathItem?.[method]) return;

      const {
        summary,
        description,
        operationId,
        parameters,
        requestBody,
        responses,
        tags: operationTags,
      } = pathItem[method] as OperationObject;

      let tagName = operationTags?.[0] ?? '';

      if (isChinese(tagName)) {
        tagName = tags?.find((tag) => tag.name === tagName)?.description ?? '';
      }

      const StandardModelApi: StandardModelApi = {
        modelName: transformCamelCase(tagName),
        standaloneName: operationId ?? '',
        path,
        method,
        description: [summary, description].filter((_) => !!_).join('\n'),
        parameters: parametersParse(parameters),
        requestBody: requestBodyParse(requestBody),
        responses: responsesParse(responses),
      };

      standardModelApis.push(StandardModelApi);
    });
  });

  return standardModelApis;
}

export function openapi3ToStandardModel(
  openapiJSON: OpenAPIV3_JSON,
  options?: ParseOptions,
): StandardModel {
  const StandardModelApis = openapiJSON.paths
    ? pathParse(openapiJSON.paths, openapiJSON.tags, options)
    : [];

  return {
    apis: StandardModelApis,
    definitions: {
      components: openapiJSON.components ?? {},
    },
  };
}
