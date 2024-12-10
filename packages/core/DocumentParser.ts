import { SchemaGenerate } from './SchemaGenerate';
import { ApiModel, getMediaType, HttpMethods, MediaType } from './apiModel';
import { TreeNodeItem } from './treeNode';
import type { Document, ParameterObject, RequestBodyObject, ResponseObject, SchemaObject } from './types';
import { isReferenceObject, parserRef } from './util';

const TS_KEYWORDS = ['delete', 'export', 'import', 'new', 'function'];
const REPLACE_WORDS = ['remove', 'exporting', 'importing', 'create', 'functionLoad'];

function toLowerFirstLetter(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function getNameFromOperatorId(operationId?: string): string {
  if (!operationId) return '';

  let name = operationId.replace(/(.+)(Using.+)/, '$1');

  const index = TS_KEYWORDS.indexOf(name);
  if (index !== -1) {
    name = REPLACE_WORDS[index];
  }

  return toLowerFirstLetter(name);
}

function isChinese(str: string) {
  return (
    str &&
    str.match(
      /[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uff1a\uff0c\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]|[\uff01-\uff5e\u3000-\u3009\u2026]/,
    )
  );
}

function transformCamelCase(tag: string): string {
  if (!tag) return '';

  if (typeof tag !== 'string') {
    throw new Error('tag is not a string: ' + tag);
  }

  // 使用正则表达式处理字符串分割
  const words = tag.match(/[a-zA-Z0-9]+/g) || [];
  const result = words
    .map(capitalize)
    .join('')
    .replace(/Controller$/, '');

  return toLowerFirstLetter(result);
}

function mergeProps(target: SchemaObject, source: SchemaObject): SchemaObject {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof target[key] === 'object' && typeof source[key] === 'object') {
        target[key] = mergeProps(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

export class DocumentParser {
  readonly document: Document;

  constructor(document: Document) {
    this.document = document;
  }

  getBaseClass(refs: string[]): TreeNodeItem {
    const schemas = this.document.components?.schemas ?? {};
    let currentRefs: string[] = refs;
    const codes: string[] = [];
    const generateRefSet = new Set<string>();

    while (currentRefs.length > 0) {
      let newRefs: string[] = [];
      currentRefs.forEach((ref) => {
        if (!generateRefSet.has(ref) && schemas[ref]) {
          const generateInfo = new SchemaGenerate(schemas[ref]).generate(ref);
          codes.push(generateInfo.code);
          newRefs = newRefs.concat(generateInfo.refs);
        }
        generateRefSet.add(ref);
      });
      currentRefs = [...new Set(newRefs)];
    }

    return {
      name: 'baseClass.ts',
      folder: 'types',
      action: 'add',
      getCode: () => codes.join('\n\n'),
    };
  }

  getApiModels(filterPath: (path: string) => boolean = () => true): ApiModel[] {
    if (!this.document.paths) return [];

    const tagMap = this.getTagMap();
    const standaloneNameMap: { [key: string]: string[] } = {};

    const apiModels: ApiModel[] = [];

    Object.entries(this.document.paths).forEach(([path, pathItem]) => {
      if (pathItem && filterPath(path)) {
        Object.entries(pathItem).forEach(([method, operation]) => {
          if (typeof operation !== 'object' || Array.isArray(operation)) return;

          const tag = (operation.tags ?? []).map((tag) => tagMap.get(tag)).filter((tag) => !!tag)[0];
          if (!tag) return;

          const operationId = operation.operationId;
          const description = operation.description;
          const standaloneName = getNameFromOperatorId(operationId);

          const key = `${tag}/${standaloneName}`;
          const len = (standaloneNameMap[key] = (standaloneNameMap[key] || []).concat(key)).length - 1;

          const apiModel: ApiModel = {
            tag,
            url: path,
            uid: `${path}&${method}`,
            standaloneName: standaloneName + `${len === 0 ? '' : len}`,
            description,
            method: method as HttpMethods,
            contentType: 'application/json',
            code: '',
            refs: [],
          };

          this.processParameters(apiModel, operation.parameters);
          this.processRequestBody(apiModel, operation.requestBody);
          this.processResponse(apiModel, operation.responses);

          const schema: SchemaObject = { type: 'object', properties: {}, required: [] };

          ['body', 'path', 'query', 'response'].forEach((key) => {
            if (apiModel[key]) {
              schema.properties![key] = apiModel[key];
              schema.required!.push(key);
            }
          });

          const { code, refs } = new SchemaGenerate(schema).generate();
          apiModel.code = code;
          apiModel.refs = refs;
          apiModels.push(apiModel);
        });
      }
    });

    return apiModels;
  }

  private getTagMap() {
    const tagMap = new Map<string, string>();

    if (this.document.tags) {
      this.document.tags.forEach((tag) => {
        const { name, description } = tag;
        const tagName = this.transformTagName(name, description);

        if (tagName) {
          tagMap.set(name, tagName);
          if (description) {
            tagMap.set(description, tagName);
          }
        }
      });
    }

    return tagMap;
  }

  private transformTagName(name: string, description?: string): string | undefined {
    let tagName = isChinese(name) ? description : name;

    if (tagName) {
      tagName = toLowerFirstLetter(transformCamelCase(tagName));
    }

    return tagName;
  }

  private processParameters(apiModel: ApiModel, parameters?: ParameterObject[]) {
    parameters?.forEach((parameter) => {
      if (isReferenceObject(parameter) || !parameter.schema) return;

      const propertieItem = { ...parameter.schema, description: parameter.description };

      ['path', 'query'].forEach((inType) => {
        if (parameter.in === inType) {
          if (!apiModel[inType]) {
            apiModel[inType] = { type: 'object', properties: {}, required: [] };
          }

          const props = parameter.name
            .split('.')
            .reverse()
            .reduce((acc, name, index) => {
              if (index === 0) {
                apiModel[inType].required.push(name);
              }
              return { [name]: index === 0 ? propertieItem : { type: 'object', properties: acc } };
            }, {} as SchemaObject);

          mergeProps(apiModel[inType].properties, props);
        }
      });
    });
  }

  private processRequestBody(apiModel: ApiModel, requestBody?: RequestBodyObject) {
    if (requestBody) {
      const requestBodiesObject = parserRef(requestBody, this.document?.components);
      if (requestBodiesObject) {
        const [mediaType, mediaTypeObject] = Object.entries(requestBodiesObject.content)[0] || [
          'application/json',
          { schema: { type: 'object' } },
        ];

        apiModel.contentType = getMediaType(mediaType as MediaType);

        if (mediaTypeObject.schema) {
          apiModel.body = {
            ...mediaTypeObject.schema,
            description: mediaTypeObject.schema.description || requestBodiesObject.description,
          };
        }
      }
    }
  }

  private processResponse(apiModel: ApiModel, responses: ResponseObject) {
    const responseSuccess = responses?.['200'];
    if (responseSuccess) {
      const responseObject = parserRef(responseSuccess, this.document?.components);
      if (responseObject?.content) {
        const mediaTypeObject = Object.values(responseObject.content)[0];
        if (mediaTypeObject.schema) {
          apiModel.response = mediaTypeObject.schema;
        }
      }
    }
  }
}
