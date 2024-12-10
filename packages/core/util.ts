import type {
  ParameterObject,
  RequestBodyObject,
  ResponseObject,
  SchemaObject,
  ReferenceObject,
  ComponentsObject,
} from './types';

type OBJ = ParameterObject | RequestBodyObject | ResponseObject | SchemaObject | ReferenceObject;

export function isReferenceObject(object: OBJ): object is ReferenceObject {
  return typeof (<ReferenceObject>object).$ref !== 'undefined';
}

export function parserRef<T extends OBJ>(object: T, components?: ComponentsObject | undefined) {
  let obj: T | undefined = undefined;

  if (isReferenceObject(object)) {
    if (components) {
      const paths = object.$ref.replace(/^#\/components\//, '').split('/');
      const refVal = paths.reduce((prev, curr) => prev[curr], components);
      // 只处理一层 ref
      if (refVal && !isReferenceObject(refVal)) {
        obj = refVal;
      }
    }
  } else {
    obj = object;
  }

  if (!obj) return null;

  return obj as Exclude<T, ReferenceObject>;
}
