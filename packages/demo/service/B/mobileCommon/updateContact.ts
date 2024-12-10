export interface Query {
  /**
   * departmentId
   */
  departmentId?: string;
  /**
   * downstreamCorpId
   */
  downstreamCorpId?: string;
}

export interface Path {
  /**
   * mobileType
   */
  mobileType: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/mobile/updateContact/{mobileType}';
const method = 'get';
