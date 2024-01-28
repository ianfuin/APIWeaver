// import { groupBy } from 'lodash/fp';
// import {
//   CompiledStandardModel,
//   CompiledStandardModelApi,
//   type StandardModel,
//   TreeNodeDirectory,
//   compileStandardModel,
//   TreeNode,
// } from '@apiweaver/core';

// import type { OpenAPIV2_JSON } from './openapi2/type';
// import type { OpenAPIV3_JSON } from './openapi3/type';
// import { openapi3ToStandardModel } from './openapi3/transform';
// import { openapi2ToStandardModel } from './openapi2/transform';
// import {
//   getMaxSamePath,
//   getNameFromOperatorId,
//   getNameFromPath,
// } from './utils';

// function isV2(
//   object: OpenAPIV2_JSON | OpenAPIV3_JSON,
// ): object is OpenAPIV2_JSON {
//   return typeof (<OpenAPIV2_JSON>object).swagger === 'string';
// }

// export function buildFileTree(
//   openapiJSON: OpenAPIV2_JSON | OpenAPIV3_JSON,
//   getContent: (
//     api: CompiledStandardModelApi,
//     compiledStandardModel: CompiledStandardModel,
//   ) => string,
// ): TreeNodeDirectory | null {
//   if (!openapiJSON) return null;

//   const usingOperationId = true;

//   let openapiStandardModel: StandardModel;

//   if (isV2(openapiJSON)) {
//     openapiStandardModel = openapi2ToStandardModel(openapiJSON, {
//       filterPath: (path) => {
//         if (['/openapi'].some((v) => path.startsWith(v))) {
//           return false;
//         }
//         if (
//           ['.htm', '.json', '**', '.txt', '.js'].some((v) => path.endsWith(v))
//         ) {
//           return false;
//         }
//         return true;
//       },
//     });
//   } else {
//     openapiStandardModel = openapi3ToStandardModel(openapiJSON);
//   }

//   // TODO hooks

//   const compiledStandardModel = compileStandardModel(openapiStandardModel);

//   const fileTree: TreeNodeDirectory = {
//     type: 'folder',
//     name: '',
//     children: [],
//   };

//   Object.entries(groupBy('modelName', compiledStandardModel.apis)).forEach(
//     ([name, apis]) => {
//       const samePath = usingOperationId
//         ? ''
//         : getMaxSamePath(apis.map((api) => api.path.slice(1)));

//       const children: TreeNode[] = apis.map((api) => {
//         const standaloneName = usingOperationId
//           ? getNameFromOperatorId(api.standaloneName)
//           : getNameFromPath(api.path, api.method, samePath);

//         return {
//           type: 'file',
//           name: `${standaloneName}.ts`,
//           content: getContent(api, compiledStandardModel),
//         };
//       });

//       if (name) {
//         fileTree.children.push({
//           type: 'folder',
//           name,
//           children,
//         });
//         return;
//       }

//       fileTree.children = fileTree.children.concat(children);
//     },
//   );

//   return fileTree;
// }
