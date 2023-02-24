import { OpenAPIV3 } from 'openapi-types';
import type { OpenAPIV3_1 } from 'openapi-types';
import type { JSONSchema } from 'json-schema-to-typescript';

type PathsObject = OpenAPIV3_1.PathsObject;
type ParameterObject = OpenAPIV3_1.ParameterObject;
type RequestBodyObject = OpenAPIV3_1.RequestBodyObject;
type ResponseObject = OpenAPIV3_1.ResponseObject;
type ReferenceObject = OpenAPIV3_1.ReferenceObject;
type OperationObject = OpenAPIV3_1.OperationObject;
type HttpMethods = OpenAPIV3_1.HttpMethods;

interface JSONSchemaBase extends JSONSchema {
  type: 'object';
}

export type MediaTypeSchema = JSONSchema;

export interface ParametersSchema extends JSONSchemaBase {
  required?: RequestParameterPosition[];
  properties: {
    [k in RequestParameterPosition]?: ParameterSchema;
  };
}

export interface ParameterSchema extends JSONSchemaBase {
  description?: string;
  required?: string[];
  properties?: {
    [k: string]: JSONSchema;
  };
}

export interface RequestBodySchema extends JSONSchemaBase {
  description?: string;
  required?: MediaType[];
  properties: {
    [k in MediaType]?: MediaTypeSchema;
  };
}

export interface ResponsesSchema extends JSONSchemaBase {
  required?: ResponseCode[];
  properties: {
    [k in ResponseCode]?: ResponseSchema;
  };
}

export interface ResponseSchema extends JSONSchemaBase {
  description?: string;
  required?: MediaType[];
  properties: {
    [k in MediaType]?: MediaTypeSchema;
  };
}

export interface PathSchema extends JSONSchemaBase {
  operationId?: string;
  description?: string;
  required?: ('Parameters' | 'RequestBody' | 'Responses')[];
  properties: {
    Parameters?: ParametersSchema;
    RequestBody?: RequestBodySchema;
    Responses?: ResponsesSchema;
  };
}

export interface PathsSchema extends JSONSchema {
  path: string;
  title: string;
  type: 'object';
  required?: HttpMethods[];
  properties: {
    [k in HttpMethods]?: PathSchema;
  };
}

export const HttpMethods = OpenAPIV3.HttpMethods;

export type ResponseCode = '200' | '400' | '404' | '500';

export enum RequestParameterPosition {
  QUERY = 'query',
  PATH = 'path',
  HEADER = 'header',
  /** parameters 可能是一个 $ref,无法确定参数位置 */
  OTHER = 'other',
}

/**
 * Media Type（媒体类型）是用于标识数据类型的字符串，常用于HTTP和其他应用程序协议
 * @example
 *  headers: {
 *  "Content-Type": MediaType.JSON, // 指定请求体的 Media Type
 * }
 */
export enum MediaType {
  JSON = 'application/json',
  XML = 'application/xml',
  HTML = 'text/html',
  PLAIN_TEXT = 'text/plain',
  JPEG = 'image/jpeg',
  PNG = 'image/png',
  MP3 = 'audio/mpeg',
  MP4 = 'video/mp4',
  PDF = 'application/pdf',
  ZIP = 'application/zip',
  // 可以根据需要添加更多的枚举项
}

const httpMethods: OpenAPIV3.HttpMethods[] = [
  HttpMethods.GET,
  HttpMethods.DELETE,
  HttpMethods.POST,
  HttpMethods.DELETE,
  HttpMethods.OPTIONS,
  HttpMethods.HEAD,
  HttpMethods.PATCH,
  HttpMethods.TRACE,
];

// function parseParameters(
//   parameters: OpenAPIV3_1.OperationObject['parameters'],
// ) {
//   const xx = groupBy('in', parameters) as {
//     [key in RequestParameterPosition]: OpenAPIV3_1.OperationObject['parameters'];
//   };
// }

// const pathSchema: PathSchema = {
//   path: '/pet/findByStatus',
//   title: 'FindPetsByStatus',
//   description: 'description',
//   type: 'object',
//   required: ['Request', 'Response'],
//   properties: {
//     Request: {
//       type: 'object',
//       required: [RequestParameterPosition.BODY],
//       properties: {
//         body: {
//           type: 'object',
//           properties: {
//             status: {
//               type: 'array',
//               items: {
//                 type: 'string',
//                 default: 'available',
//                 enum: ['available', 'pending', 'sold'],
//               },
//             },
//           },
//         },
//       },
//     },
//     Response: {
//       type: 'object',
//       required: ['200'],
//       properties: {
//         '200': {
//           type: 'object',
//           description: 'successful operation',
//           required: [MediaType.JSON],
//           properties: {
//             'application/json': {
//               type: 'array',
//               items: {
//                 $ref: '#/components/schemas/Pet',
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// };

/**
 * 不处理 parameters, requestBody, responses 中的 ReferenceObject 情况。
 * $ref 指向的是一个 schema 文档, @apidevtools/swagger-parser 会处理。
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
): ParametersSchema {
  if (!parameters?.length) return null;

  const parametersSchema: ParametersSchema = {
    type: 'object',
    required: [],
    properties: {},
  };

  parameters.forEach((parameter) => {
    if (!parameters) return null;

    if (!isReferenceObject(parameter)) {
      if (!parametersSchema.properties[parameter.in]) {
        parametersSchema.required.push(
          parameter.in as RequestParameterPosition,
        );
        parametersSchema.properties[parameter.in] = {
          type: 'object',
          required: [],
          properties: {},
        };
      }

      if (parameter.required) {
        parametersSchema.properties[parameter.in].required.push(parameter.name);
      }
      parametersSchema.properties[parameter.in].properties = {
        [parameter.name]: {
          description: parameter.description,
          ...parameter.schema,
        },
      };
    }
  });

  return parametersSchema;
}

export function requestBodyParse(
  requestBody: OperationObject['requestBody'],
): RequestBodySchema {
  if (!requestBody) return null;

  const requestBodySchema: RequestBodySchema = {
    type: 'object',
    description: requestBody.description,
    required: [],
    properties: {},
  };

  if (!isReferenceObject(requestBody)) {
    if (!requestBody.content) return null;

    Object.entries(requestBody.content).forEach(([media, mediaTypeObject]) => {
      if (!mediaTypeObject) return null;

      if (!requestBodySchema.properties[media]) {
        requestBodySchema.required.push(media as MediaType);
        requestBodySchema.properties[media] = {
          type: 'object',
          required: [],
          ...mediaTypeObject.schema,
        };
      }
    });
  }

  return requestBodySchema;
}

export function responsesParse(
  responses: OperationObject['responses'],
): ResponsesSchema {
  if (!responses) return null;

  const responsesSchema: ResponsesSchema = {
    type: 'object',
    required: [],
    properties: {},
  };

  Object.entries(responses).forEach(([code, response]) => {
    if (!response) return null;

    if (!isReferenceObject(response)) {
      if (!response.content) return null;

      if (!responsesSchema.properties[code]) {
        responsesSchema.required.push(code as ResponseCode);
        responsesSchema.properties[code] = {
          type: 'object',
          required: [],
          properties: {},
        };
      }

      const responseSchema: ResponseSchema = {
        type: 'object',
        description: response.description,
        required: [],
        properties: {},
      };
      Object.entries(response.content).forEach(([media, responseObject]) => {
        if (!responseObject) return null;

        if (!responseSchema.properties[media]) {
          responseSchema.required.push(media as MediaType);
          responseSchema.properties[media] = {
            type: 'object',
            required: [],
            ...responseObject.schema,
          };
        }
      });

      responsesSchema.properties[code] = responseSchema;
    }
  });

  return responsesSchema;
}

export function pathParse(paths: PathsObject): PathsSchema[] {
  if (!paths) return [];

  return Object.entries(paths).map(([path, pathItem]) => {
    // TODO 生成 title
    const title = path;

    const pathsSchema: PathsSchema = {
      title,
      path,
      type: 'object',
      required: [],
      properties: {},
    };

    if (!pathItem) return pathsSchema;

    httpMethods.forEach((httpMethod) => {
      if (!pathItem[httpMethod]) return;

      if (!pathsSchema.properties[httpMethod]) {
        pathsSchema.required.push(httpMethod);
      }

      const { parameters, requestBody, responses, description, operationId } =
        pathItem[httpMethod] as OperationObject;

      const pathSchema: PathSchema = {
        description,
        operationId,
        type: 'object',
        required: [],
        properties: {},
      };

      const parametersSchema = parametersParse(parameters);
      const requestBodySchema = requestBodyParse(requestBody);
      const responsesSchema = responsesParse(responses);

      if (parametersSchema) {
        pathSchema.required.push('Parameters');
        pathSchema.properties.Parameters = parametersSchema;
      }

      if (requestBodySchema) {
        pathSchema.required.push('RequestBody');
        pathSchema.properties.RequestBody = requestBodySchema;
      }

      if (responsesSchema) {
        pathSchema.required.push('Responses');
        pathSchema.properties.Responses = responsesSchema;
      }

      pathsSchema.properties[httpMethod] = pathSchema;
    });

    return pathsSchema;
  });
}
