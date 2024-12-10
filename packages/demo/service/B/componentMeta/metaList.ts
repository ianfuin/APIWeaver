export interface Query {
  /**
   * env
   */
  env?: string;
}

export interface Path {
  /**
   * componentId
   */
  componentId: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/component/{componentId}';
const method = 'get';
m {
  env?: string;
  keyword?: string;
  pageNo?: number;
  pageSize?: number;
}

export type Body = ComponentMetaSearchModel;

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/component/list';
const method = 'post';
