export interface OrganizationMemberDO {
  accountId?: string;
  accountName?: string;
  accountType?: number;
  dingUserNick?: string;
  enableMailDesensitization?: boolean;
  enablePhoneDesensitization?: boolean;
  fsUserId?: string;
  fsUserNick?: string;
  gmtCreate?: string;
  gmtLastLogin?: string;
  hasDing?: boolean;
  hasDingBUC?: boolean;
  hasFeishu?: boolean;
  hasMail?: boolean;
  hasPhone?: boolean;
  hasWeixin?: boolean;
  hasWorkspace?: boolean;
  hasWorkspaceDevelopPermission?: boolean;
  isAdmin?: boolean;
  isAuthAdmin?: boolean;
  isDefault?: boolean;
  isDeleted?: boolean;
  isQbiAccount?: boolean;
  mail?: string;
  nick?: string;
  nickname?: string;
  orgRoleMap?: object;
  organizationId?: string;
  parentAccountId?: string;
  parentAccountName?: string;
  phone?: string;
  roleList?: string;
  staffId?: string;
  userId?: string;
  userType?: number;
  usergroupIds?: UsergroupMemberDetailDO[];
  wxUserId?: string;
  wxUserNick?: string;
  yunAccount?: string;
}
export interface UsergroupMemberDetailDO {
  identifiedPath?: string;
  userId?: string;
  usergroupId?: string;
  usergroupName?: string;
}
export interface Query {
  /**
   * keyword
   */
  keyword?: string;
  /**
   * pageNum
   */
  pageNum?: number;
  /**
   * pageSize
   */
  pageSize?: number;
  /**
   * withUserGroup
   */
  withUserGroup?: boolean;
  /**
   * withUserExpend
   */
  withUserExpend?: boolean;
}

/**
 * OK
 */
export type Response = OrganizationMemberDO[];

const path = '/api/v2/organizationUser/list';
const method = 'get';
