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

/**
 * OK
 */
export type Response = IcodeDO;

const path = '/api/v2/icode/get';
const method = 'get';
