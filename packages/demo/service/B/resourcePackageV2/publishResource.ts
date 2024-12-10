export interface Query {
  /**
   * exportName
   */
  exportName: string;
}

export interface Path {
  /**
   * resourceId
   */
  resourceId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/resourcepackage/export/publish/{resourceId}';
const method = 'get';
