export interface AccountTypeModel {
  accountType?: string;
  code?: number;
}

/**
 * OK
 */
export type Response = AccountTypeModel[];

const path = '/api/v2/system/enabledAccountTypes';
const method = 'get';
