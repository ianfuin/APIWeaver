export interface UserResourceCntModel {
  cubeCnt?: number;
  dashboardCnt?: number;
  workspaceCntOfOrg?: number;
}

/**
 * OK
 */
export type Response = UserResourceCntModel;

const path = '/api/v2/user/queryResourceCnt';
const method = 'get';
