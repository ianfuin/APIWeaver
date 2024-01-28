import { type CompileSchemaResult } from '../schemaCompile';
import type { JSONSchema } from '../schemaCompile/types/AST';

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
  | 'patch';

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

type RequestParameter<S> = {
  [key in RequestParameterPosition]?: S;
};

type RequestBody<S> = {
  [key in MediaType]?: S;
};

type Responses<S> = {
  [key in ResponseCode]?: { [key in MediaType]?: S };
};

/**
 *
 * @example
  standaloneName: 'findPetsByStatus';
  path: '/pet/findByStatus';
  method: 'get';
  tags: ['pet'];
  description: 'Status values that need to be';

  parameters: { "query": schema};
  requestBody: { "application/json": schema };
  responses: { "200": { "application/json": schema } };
 *
 */
interface ApiModel<S, T> {
  standaloneName: string;
  path: string;
  method: HttpMethods;
  modelName?: string;
  description?: string;
  parameters?: RequestParameter<S>;
  requestBody?: RequestBody<S>;
  responses?: Responses<S>;
  extra?: T;
}

export interface StandardModel<S = { schema: JSONSchema }, T = unknown> {
  apis: ApiModel<S, T>[];
  definitions: Record<string, { [key: string]: JSONSchema }>;
}

export type StandardModelApi = StandardModel['apis'][0];

export interface CompiledStandardModel<T = unknown>
  extends StandardModel<CompileSchemaResult, T> {
  dereferencePathMap: Map<string, CompileSchemaResult | undefined>;
}

export type CompiledStandardModelApi = CompiledStandardModel['apis'][0];
