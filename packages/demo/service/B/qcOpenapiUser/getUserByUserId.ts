export interface ResultModelUserModel {
  data?: UserModel;
  errCode?: number;
  errMsg?: string;
  requestId?: string;
}
export interface UserModel {
  accountId?: string;
  accountName?: string;
  accountType?: number;
  baseId?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  mail?: string;
  nick?: string;
  nickNameOrAccountName?: string;
  nickname?: string;
  phone?: string;
  userId?: string;
  version?: string;
}

export interface Path {
  /**
   * userId
   */
  userId: string;
}

/**
 * OK
 */
export type Response = ResultModelUserModel;

const path = '/qc/openapi/user/{userId}';
const method = 'get';
