export interface CommonParameterDO {
  gmtCreate?: string;
  gmtModified?: string;
  groupId?: string;
  id?: number;
  name?: string;
  value?: string;
}
export interface Query {
  /**
   * groupId
   */
  groupId?: string;
  /**
   * paramName
   */
  paramName?: string;
}

/**
 * OK
 */
export type Response = CommonParameterDO[];

const path = '/api/v2/system/devops/systemParam';
const method = 'get';
