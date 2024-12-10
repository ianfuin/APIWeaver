export interface Query {
  /**
   * exportName
   */
  exportName: string;
  /**
   * expireTime
   */
  expireTime: string;
  /**
   * accessCode
   */
  accessCode: string;
}

export interface Path {
  /**
   * resourceId
   */
  resourceId: string;
}

const path = '/api/v2/workspublish/export/export/{resourceId}';
const method = 'get';
