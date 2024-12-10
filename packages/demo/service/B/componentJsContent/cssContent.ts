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

const path = '/api/v2/component/css/{componentId}/main_css';
const method = 'get';
