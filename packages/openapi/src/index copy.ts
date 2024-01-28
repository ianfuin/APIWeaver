// const json = fs.readJSONSync(path.resolve(__dirname, '../json/qbi.json'));

// async function run() {
//   console.time('run');
//   const result = await buildFileTree(
//     json as any,
//     (api, compiledStandardModel) => {
//       const refCodeStr = getReferenceCodeStr(
//         compiledStandardModel.dereferencePathMap,
//         [
//           ...new Set([
//             ...(api.parameters?.query?.referencePaths ?? []),
//             ...(api.parameters?.header?.referencePaths ?? []),
//             ...(api.parameters?.path?.referencePaths ?? []),
//             ...(api.parameters?.body?.referencePaths ?? []),
//             ...(api.requestBody?.['application/json']?.referencePaths ?? []),
//             ...(api.requestBody?.['multipart/form-data']?.referencePaths ?? []),
//             ...(api.responses?.[200]?.['application/json']?.referencePaths ??
//               []),
//           ]),
//         ],
//       ).join('\n');

//       return `
//         ${refCodeStr}
//         ${api.parameters?.query?.getCodeStr() ?? ''}
//         ${api.parameters?.header?.getCodeStr() ?? ''}
//         ${api.parameters?.path?.getCodeStr() ?? ''}
//         ${api.parameters?.body?.getCodeStr() ?? ''}
//         ${api.requestBody?.['application/json']?.getCodeStr() ?? ''}
//         ${api.requestBody?.['multipart/form-data']?.getCodeStr() ?? ''}
//         ${api.responses?.[200]?.['application/json']?.getCodeStr() ?? ''}

//         const paht = '${api.path}'
//         const method = '${api.method}'
//         `;
//     },
//   );

//   if (result) {
//     fs.removeSync(path.resolve(__dirname, '../dist/test'));
//   }

//   console.timeEnd('run');
// }

// run();
