import { JSONSchema } from '../schemaCompile/types/AST';

export interface RequestParameter {
  position: RequestParameterPosition | undefined;
  schema?: JSONSchema | undefined;
}

export interface RequestBody {
  contentType: MediaType;
  schema?: JSONSchema | undefined;
}

export interface Responses {
  responseCode: ResponseCode;
  contentType?: MediaType | undefined;

  schema?: JSONSchema | undefined;
}

/**
 *
 * @example
  path: '/pet/findByStatus';
  method: 'get';
  operationId: 'findPetsByStatus';
  description: 'Status values that need to be';

  parameters: [ 
    { position: 'query', schema  },
    { position: 'path', schema  },
    { position: 'header', schema  },
   ];
  requestBody: [ 
    { contentType: 'application/json', schema  },
   ];;
  responses: [ 
    { responseCode: 200, contentType: 'application/json', schema  },
   ];
 *
 */
export interface StandardModel {
  standaloneName: string;
  path: string;
  method: HttpMethods;

  description?: string;
  parameters?: RequestParameter[];
  requestBody?: RequestBody[];
  responses?: Responses[];
}

/**
 * 常见的请求方式
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
 */
export type HttpMethods =
  | 'get'
  | 'put'
  | 'post'
  | 'delete'
  | 'options'
  | 'head'
  | 'patch'
  | 'trace';

/**
 * 常见的请求响应状态码
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */
export type ResponseCode =
  | '200'
  | '400'
  | '401'
  | '402'
  | '404'
  | '500'
  | '502'
  | '504';

/**
 * 常见的参数位置
 */
export type RequestParameterPosition = 'query' | 'path' | 'header';

/**
 * 常见的媒体格式类型
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 */
export type MediaType =
  | 'text/html'
  | 'text/plain'
  | 'text/xml'
  | 'image/gif'
  | 'image/jpeg'
  | 'image/png'
  | 'application/xhtml+xml'
  | 'application/xml'
  | 'application/atom+xml'
  | 'application/json'
  | 'application/pdf'
  | 'application/zip'
  | 'application/msword'
  | 'application/octet-stream'
  | 'application/x-www-form-urlencoded'
  | 'multipart/form-data';
