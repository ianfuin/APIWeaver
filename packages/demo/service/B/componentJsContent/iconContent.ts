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
export type Response = string;

const path = '/api/v2/component/icon/{componentId}/main_icon';
const method = 'get';
