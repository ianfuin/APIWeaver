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

import {
  ParameterObject,
  ResponseObject,
  ReferenceObject,
  OperationObject,
  PathsObject,
  OpenAPIV2_JSON,
} from './type';
import { isChinese, transformCamelCase } from '../utils';
import { ParseOptions } from '../type';

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
  object: ParameterObject | ResponseObject | ReferenceObject,
): object is ReferenceObject {
  return typeof (<ReferenceObject>object)?.$ref !== 'undefined';
}

function parametersParse(
  parameters: OperationObject['parameters'],
  consumes: OperationObject['consumes'],
): {
  parameters: StandardModelApi['parameters'];
  requestBody: StandardModelApi['requestBody'];
} {
  if (!parameters?.length)
    return { parameters: undefined, requestBody: undefined };

  const standardModelApiParameters: StandardModelApi['parameters'] = {};
  const standardModelApiRequestBody: StandardModelApi['requestBody'] = {};

  const group = groupBy('in', parameters);

  Object.entries(group).forEach(([position, parameters]) => {
    if (
      requestParameterPosition.includes(position as RequestParameterPosition)
    ) {
      const schema: JSONSchema = {
        type: 'object',
        title: position,
        required: [],
      };

      parameters.forEach((parameter) => {
        if (!isReferenceObject(parameter)) {
          if (parameter.required) {
            schema.required?.push(parameter.name);
          }

          schema.properties = {
            ...schema.properties,
            [parameter.name]: {
              description: parameter.description,
              type: parameter.type,
            } as JSONSchema,
          };
        }
      });

      standardModelApiParameters[position as RequestParameterPosition] =
        schema.properties ? { schema } : undefined;
    } else {
      let schema: JSONSchema = {
        type: 'object',
        title: 'body',
        required: [],
      };

      parameters.forEach((parameter) => {
        if (!isReferenceObject(parameter)) {
          if (parameter.required) {
            schema.required?.push(parameter.name);
          }

          // formData
          if (!parameter.schema) {
            schema.properties = {
              ...schema.properties,
              [parameter.name]: {
                description: parameter.description,
                type: parameter.type,
              } as JSONSchema,
            };
          } else {
            if (isReferenceObject(parameter.schema)) {
              schema.items = { $ref: parameter.schema.$ref };
            } else {
              schema = { ...schema, ...parameter.schema };
            }
          }
        }
      });

      ((consumes as MediaType[]) ?? ['application/json']).forEach((media) => {
        standardModelApiRequestBody[media] =
          schema.properties || schema.items ? { schema } : undefined;
      });
    }
  });

  return {
    parameters: standardModelApiParameters,
    requestBody: standardModelApiRequestBody,
  };
}

function responsesParse(
  responses: OperationObject['responses'],
  consumes: OperationObject['consumes'],
): StandardModelApi['responses'] {
  if (!responses) return undefined;

  const standardModelApiResponses: StandardModelApi['responses'] = {};

  Object.entries(responses).forEach(([code, response]) => {
    if (!response) return;

    if (!isReferenceObject(response)) {
      const responsesSchema = response.schema
        ? {
            schema: {
              type: 'object',
              title: 'response',
              description: response.description,
              ...(response.schema.$ref
                ? { items: { $ref: response.schema.$ref } }
                : response.schema),
            } as JSONSchema,
          }
        : undefined;

      ((consumes as MediaType[]) ?? ['application/json']).forEach((media) => {
        standardModelApiResponses[code as ResponseCode] = {
          ...standardModelApiResponses[code as ResponseCode],
          [media]: responsesSchema,
        };
      });
    }
  });

  return standardModelApiResponses;
}

function pathParse(
  pathsObject: PathsObject,
  tags: OpenAPIV2_JSON['tags'],
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
        responses,
        consumes,
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
        ...parametersParse(parameters, consumes),
        responses: responsesParse(responses, consumes),
      };

      standardModelApis.push(StandardModelApi);
    });
  });

  return standardModelApis;
}

export function openapi2ToStandardModel(
  openapiJSON: OpenAPIV2_JSON,
  options?: ParseOptions,
): StandardModel {
  const StandardModelApis = openapiJSON.paths
    ? pathParse(openapiJSON.paths, openapiJSON.tags, options)
    : [];

  return {
    apis: StandardModelApis,
    definitions: {
      definitions: openapiJSON.definitions ?? {},
    },
  };
}
