import { SchemaObject } from './types';

/**
 * 常见的请求方式
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
 */
export type HttpMethods = 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch';

/**
 * 常见的请求响应状态码
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */
export type ResponseCode = '200' | '400' | '401' | '402' | '404' | '500' | '502' | '504';

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

export interface ApiModel {
  tag: string;
  refs: string[];

  url: string;
  uid: string;

  standaloneName: string;

  description?: string;
  method: HttpMethods;
  contentType: MediaType;

  path?: SchemaObject;
  query?: SchemaObject;
  body?: SchemaObject;
  response?: SchemaObject;

  code: string;
}

const MediaTypeSet = new Set<MediaType>([
  'text/html',
  'text/plain',
  'text/xml',
  'image/gif',
  'image/jpeg',
  'image/png',
  'application/xhtml+xml',
  'application/xml',
  'application/atom+xml',
  'application/json',
  'application/pdf',
  'application/zip',
  'application/msword',
  'application/octet-stream',
  'application/x-www-form-urlencoded',
  'multipart/form-data',
]);

export function getMediaType(mediaType: MediaType): MediaType {
  return MediaTypeSet.has(mediaType) ? mediaType : 'application/json';
}
