import type { JSONSchema } from '@apiweaver/core';
import type { OpenAPIV2 } from 'openapi-types';

export type OpenAPIV2_JSON = OpenAPIV2.Document & {
  definitions: { [index: string]: JSONSchema };
};
export type PathsObject = OpenAPIV2.PathsObject;
export type ParameterObject = OpenAPIV2.ParameterObject;
export type ResponseObject = OpenAPIV2.ResponseObject;
export type ReferenceObject = OpenAPIV2.ReferenceObject;
export type OperationObject = OpenAPIV2.OperationObject;
