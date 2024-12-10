export interface Query {
  /**
   * groupId
   */
  groupId: string;
  /**
   * paramName
   */
  paramName: string;
  /**
   * paramValue
   */
  paramValue: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/system/devops/modifySystemParam';
const method = 'post';
