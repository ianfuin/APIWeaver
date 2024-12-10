export interface EsResultDO {
  completionSuggest?: string[];
  countInfo?: SearchCountInfo;
  esSearchInput?: EsSearchInput;
  guessYouWant?: SearchGuessYouWant[];
  keyword?: string;
  result?: SearchResult;
  totalCount?: number;
}
export interface SearchCountInfo {
  documentCount?: number;
  documentCountPreview?: number;
  functionCount?: number;
  functionCountPreview?: number;
  guessYouWantCount?: number;
  workCount?: number;
  workCountPreview?: number;
  workTypeCountMap?: object;
  workspaceCount?: number;
  workspaceCountPreview?: number;
}
export interface EsSearchInput {
  keyword?: string;
  preview?: boolean;
  size?: number;
  sortRule?: string;
  sortType?: string;
  userId?: string;
  workType?: string;
}
export interface SearchGuessYouWant {
  result?: object;
  type?: string;
}
export interface SearchResult {
  document?: EsDocumentDO[];
  function?: EsFunctionDO[];
  work?: EsWorkDO[];
  workspace?: EsWorkspaceDO[];
}
export interface Query {
  /**
   * keyword
   */
  keyword: string;
  /**
   * size
   */
  size: number;
  /**
   * type
   */
  type: string;
  /**
   * sortRule
   */
  sortRule: string;
}

/**
 * OK
 */
export type Response = EsResultDO;

const path = '/api/v2/search/searchResultSorted';
const method = 'get';