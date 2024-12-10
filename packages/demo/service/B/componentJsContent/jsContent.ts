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
  /**
   * jsName
   */
  jsName: string;
}

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/component/js/{componentId}/{jsName}';
const method = 'get';
