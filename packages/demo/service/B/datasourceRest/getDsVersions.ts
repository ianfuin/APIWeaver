export interface Path {
  /**
   * dsType
   */
  dsType: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/restapi/datasource/versions/{dsType}';
const method = 'get';
