export interface Query {
  /**
   * type
   */
  type: string;
  /**
   * resource
   */
  resource: string;
}

const path = '/api/v2/map/check';
const method = 'post';
