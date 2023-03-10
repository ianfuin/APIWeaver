import type {
  HttpMethods,
  StandardModel,
  RequestParameterPosition,
  JSONSchema,
  MediaType,
  ResponseCode,
} from '@apiweaver/core';
import { groupBy } from 'lodash/fp';

import {
  ParameterObject,
  RequestBodyObject,
  ResponseObject,
  ReferenceObject,
  OperationObject,
  PathsObject,
} from './types/openapi';

const httpMethods: HttpMethods[] = [
  'get',
  'put',
  'post',
  'delete',
  'options',
  'head',
  'patch',
  'trace',
];

const requestParameterPosition: RequestParameterPosition[] = [
  'header',
  'path',
  'query',
];

/**
 * 不处理 parameters, requestBody, responses 中的 ReferenceObject 情况。
 */
export function isReferenceObject(
  object:
    | ParameterObject
    | RequestBodyObject
    | ResponseObject
    | ReferenceObject,
): object is ReferenceObject {
  return typeof (<ReferenceObject>object).$ref !== 'undefined';
}

export function parametersParse(
  parameters: OperationObject['parameters'],
): StandardModel['parameters'] {
  if (!parameters?.length) return [];

  const standardModelParameters: StandardModel['parameters'] = [];

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

    standardModelParameters.push({
      position,
      schema: schema.properties ? schema : undefined,
    });
  });

  return standardModelParameters;
}

export function requestBodyParse(
  requestBody: OperationObject['requestBody'],
): StandardModel['requestBody'] {
  if (!requestBody) return [];

  if (isReferenceObject(requestBody)) return [];

  if (!requestBody.content) return [];

  return Object.entries(requestBody.content)
    .filter((_) => !!_)
    .map(([media, mediaTypeObject]) => {
      return {
        contentType: media as MediaType,
        schema: mediaTypeObject.schema
          ? {
              type: 'object',
              title: 'body',
              ...(mediaTypeObject.schema as JSONSchema),
            }
          : undefined,
      };
    });
}

export function responsesParse(responses: OperationObject['responses']) {
  if (!responses) return [];

  const standardModelResponses: StandardModel['responses'] = [];

  Object.entries(responses).map(([code, response]) => {
    if (!response) return null;

    if (!isReferenceObject(response)) {
      if (!response.content) return null;

      Object.entries(response.content).forEach(([media, responseObject]) => {
        if (!responseObject) return null;

        standardModelResponses.push({
          responseCode: code as ResponseCode,
          contentType: media as MediaType,
          schema: responseObject.schema
            ? {
                type: 'object',
                title: 'body',
                description: response.description,
                ...(responseObject.schema as JSONSchema),
              }
            : undefined,
        });
      });
    }
  });

  return standardModelResponses;
}

export function pathParse(paths: PathsObject): StandardModel[] {
  if (!paths) return [];

  const standardModels: StandardModel[] = [];

  Object.entries(paths).forEach(([path, pathItem]) => {
    httpMethods.forEach((method) => {
      if (!pathItem?.[method]) return;

      const {
        summary,
        description,
        operationId,
        parameters,
        requestBody,
        responses,
      } = pathItem[method] as OperationObject;

      const standardModel: StandardModel = {
        // TODO
        standaloneName: operationId || '',
        path,
        method,
        description: [summary, description].filter((_) => !!_).join('\n'),
        parameters: parametersParse(parameters),
        requestBody: requestBodyParse(requestBody),
        responses: responsesParse(responses),
      };

      standardModels.push(standardModel);
    });
  });

  return standardModels;
}
