export interface Query {
  /**
   * display
   */
  display?: boolean;
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

const path = '/api/v2/component/{componentId}/display';
const method = 'put';
