export interface IcodeDO {
  authGroupId?: number;
  gmtCreate?: string;
  gmtModified?: string;
  icode?: string;
  icodeKey?: string;
  id?: number;
  parentIcodeKey?: string;
  type?: number;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

/**
 * OK
 */
export type Response = IcodeDO;

const path = '/api/v2/icode/workspace/get';
const method = 'get';
