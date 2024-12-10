import type { ApiModel } from './apiModel';

export interface CompareResults {
  added: Set<string>;
  modified: Set<string>;
  removed: Set<string>;
}

interface ApiMap {
  [key: string]: ApiModel;
}


export function compareApiModel(oldApis: ApiModel[], newApis: ApiModel[]) {
  const oldApiMap = oldApis.reduce((prev, curr) => {
    prev[curr.uid] = curr;
    return prev;
  }, {} as ApiMap);
  const newApiMap = newApis.reduce((prev, curr) => {
    prev[curr.uid] = curr;
    return prev;
  }, {} as ApiMap);

  const apiModels: ApiModel[] = [];

  const addedUrls = newApis.filter((api) => !oldApiMap[api.url]);
  const removedUrls = oldApis.filter((api) => !newApiMap[api.url]);
  const commonUrls = oldApis.filter((api) => newApiMap[api.url]);

  const results: CompareResults = {
    added: new Set<string>(),
    modified: new Set<string>(),
    removed: new Set<string>(),
  };

  // 处理新增路径
  addedUrls.forEach((api) => {
    results.added.add(api.uid);
    apiModels.push(newApiMap[api.uid]);
  });

  // 处理删除路径
  removedUrls.forEach((api) => {
    results.removed.add(api.uid);
    apiModels.push(oldApiMap[api.uid]);
  });

  // 处理共同路径
  commonUrls.forEach((api) => {
    const oldApi = oldApiMap[api.uid];
    const newApi = newApiMap[api.uid];

    if (JSON.stringify(oldApi) !== JSON.stringify(newApi)) {
      results.modified.add(api.uid);
    }

    apiModels.push(newApi);
  });

  return { results, apiModels };
}
