export interface UserBasicQueryEvent {
  accountTypes?: number[];
  hasMail?: boolean;
  hasPhone?: boolean;
  keyword?: string;
  pageNum?: number;
  pageSize?: number;
  userTypes?: number[];
}
export interface PaginatedValOrganizationUserQueryDO {
  data?: OrganizationUserQueryDO[];
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
export interface OrganizationUserQueryDO {
  accountId?: string;
  accountName?: string;
  accountType?: number;
  nickname?: string;
  userExpandInfoMap?: object;
  userId?: string;
  userType?: number;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}

export type Body = UserBasicQueryEvent;

/**
 * OK
 */
export type Response = PaginatedValOrganizationUserQueryDO;

const path = '/api/v2/organizationUser/queryUserBasicInfoList';
const method = 'post';
