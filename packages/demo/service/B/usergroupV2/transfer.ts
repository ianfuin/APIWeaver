export interface UsergroupTransferModel {
  alloweMoveMobileType?: boolean;
  operator?: string;
  parentUsergroupId?: string;
  usergroupId?: string;
}

export type Body = UsergroupTransferModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/usergroup/transfer';
const method = 'put';
