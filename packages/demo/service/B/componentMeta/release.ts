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

const path = '/api/v2/component/{componentId}/release';
const method = 'put';