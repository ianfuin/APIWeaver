import type { OpenAPIV3_1, OpenAPIV3 } from 'openapi-types';

export type NonArraySchemaObject = OpenAPIV3_1.NonArraySchemaObject;
export type Document = OpenAPIV3_1.Document;
export type PathsObject = Document['paths'];

export type ReferenceObject = OpenAPIV3_1.ReferenceObject | OpenAPIV3.ReferenceObject;


export type ResponseObject = OpenAPIV3.ResponsesObject & OpenAPIV3_1.ResponsesObject;
export type RequestBodyObject = OpenAPIV3_1.RequestBodyObject | OpenAPIV3.RequestBodyObject | ReferenceObject;
export type ParameterObject = OpenAPIV3_1.ParameterObject | OpenAPIV3.ParameterObject | ReferenceObject;

export type OperationObject = OpenAPIV3_1.OperationObject;
export type SchemaObject = OpenAPIV3_1.SchemaObject;
export type ComponentsObject = OpenAPIV3_1.ComponentsObject;
