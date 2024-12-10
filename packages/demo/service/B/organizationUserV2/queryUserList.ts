export interface PaginatedValOrganizationMemberVO {
  data?: OrganizationMemberVO[];
  next?: number;
  orderBy?: OrderBy[];
  orderString?: string;
  pageNum?: number;
  pageSize?: number;
  pre?: number;
  start?: number;
  totalNum?: number;
  totalPages?: number;
}
export interface OrganizationMemberVO {
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
  isCreator?: boolean;
  isDefault?: boolean;
  isDeleted?: boolean;
  isQbiAccount?: boolean;
  mail?: string;
  nick?: string;
  nickname?: string;
  organizationId?: string;
  owner?: boolean;
  parentAccountId?: string;
  parentAccountName?: string;
  phone?: string;
  roleList?: number[];
  staffId?: string;
  userId?: string;
  userType?: number;
  usergroupIds?: UsergroupMemberDetailDO[];
  wxUserId?: string;
  wxUserNick?: string;
  yunAccount?: string;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * keyword
   */
  keyword?: string;
  /**
   * userType
   */
  userType?: number;
  /**
   * pageNum
   */
  pageNum?: number;
  /**
   * pageSize
   */
  pageSize?: number;
  /**
   * withLastLoginTime
   */
  withLastLoginTime?: boolean;
  /**
   * withUserGroup
   */
  withUserGroup?: boolean;
  /**
   * withUserExpend
   */
  withUserExpend?: boolean;
  /**
   * accountType
   */
  accountType?: number;
  /**
   * userRoleType
   */
  userRoleType?: number;
  /**
   * bindMobileType
   */
  bindMobileType?: string;
  /**
   * isDeleted
   */
  isDeleted?: boolean;
  /**
   * orderBy
   */
  orderBy?: string;
  /**
   * desc
   */
  desc?: boolean;
}

/**
 * OK
 */
export type Response = PaginatedValOrganizationMemberVO;

const path = '/api/v2/organizationUser/pagingList';
const method = 'get';
