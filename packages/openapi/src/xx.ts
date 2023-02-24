interface ParameterObject {
  name: string;
  in: string;
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
  schema?: ReferenceObject | SchemaObject;
  content?: {
    [media: string]: MediaTypeObject;
  };
}

interface RequestBodyObject {
  description?: string;
  content: {
    [media: string]: MediaTypeObject;
  };
  required?: boolean;
}

interface ResponseObject {
  headers?: {
    [header: string]: ReferenceObject | HeaderObject;
  };
  content?: {
    [media: string]: MediaTypeObject;
  };
  description: string;
}

interface ReferenceObject {
  $ref: string;
  summary?: string;
  description?: string;
}

interface MediaTypeObject {
  schema?: SchemaObject | ReferenceObject;
  encoding?: {
    [media: string]: EncodingObject;
  };
}

interface EncodingObject {
  contentType?: string;
  headers?: {
    [header: string]: ReferenceObject | HeaderObject;
  };
  explode?: boolean;
  allowReserved?: boolean;
}

interface HeaderObject {
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  explode?: boolean;
  allowReserved?: boolean;
  schema?: ReferenceObject | SchemaObject;
  content?: {
    [media: string]: MediaTypeObject;
  };
}

interface BaseSchemaObject {
  title?: string;
  description?: string;
  format?: string;
  default?: any;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  additionalProperties?: boolean | ReferenceObject | SchemaObject;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  enum?: any[];
  properties?: {
    [name: string]: ReferenceObject | SchemaObject;
  };
  allOf?: (ReferenceObject | SchemaObject)[];
  oneOf?: (ReferenceObject | SchemaObject)[];
  anyOf?: (ReferenceObject | SchemaObject)[];
  not?: ReferenceObject | SchemaObject;
  nullable?: boolean;
  readOnly?: boolean;
  writeOnly?: boolean;
  deprecated?: boolean;
}

export type SchemaObject =
  | ArraySchemaObject
  | NonArraySchemaObject
  | MixedSchemaObject;

export interface ArraySchemaObject extends BaseSchemaObject {
  type: ArraySchemaObjectType;
  items: ReferenceObject | SchemaObject;
}

export interface NonArraySchemaObject extends BaseSchemaObject {
  type?: NonArraySchemaObjectType;
}

interface MixedSchemaObject extends BaseSchemaObject {
  type?: (ArraySchemaObjectType | NonArraySchemaObjectType)[];
  items?: ReferenceObject | SchemaObject;
}

type NonArraySchemaObjectType =
  | 'boolean'
  | 'object'
  | 'number'
  | 'string'
  | 'integer';
type ArraySchemaObjectType = 'array';
