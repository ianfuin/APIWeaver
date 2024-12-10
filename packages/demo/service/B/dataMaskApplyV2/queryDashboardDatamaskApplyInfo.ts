export interface DatamaskApplyModel {
  accountId?: string;
  columnIds?: string[];
  cubeId?: string;
  userId?: string;
}
export interface Query {
  /**
   * worksId
   */
  worksId: string;
}

/**
 * OK
 */
export type Response = DatamaskApplyModel[];

const path = '/api/v2/dataMask/access/whetherNeedApply';
const method = 'get';
