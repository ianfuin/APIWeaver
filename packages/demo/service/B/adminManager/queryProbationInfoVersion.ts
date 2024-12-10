export interface PrbInfoDO {
  accountId?: string;
  accountName?: string;
  count?: string;
  expireDate?: string;
  id?: string;
  probationType?: string;
  probationVersion?: string;
  userId?: string;
}

/**
 * OK
 */
export type Response = PrbInfoDO[];

const path = '/restapi/admin/queryProbationInfoVersion';
const method = 'get';
