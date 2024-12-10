export interface PaginatedValInstanceOrganizationModel {
  data?: InstanceOrganizationModel[];
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
export interface InstanceOrganizationModel {
  accountType?: number;
  expireMillis?: number;
  gmtCreate?: number;
  gmtExpire?: number;
  gmtModified?: number;
  instanceId?: string;
  instanceName?: string;
  instanceStatus?:
    | 'RUNNING'
    | 'SOONDUE'
    | 'SOONOWN'
    | 'NOMONEY'
    | 'NOTIME'
    | 'FORCEOFF'
    | 'OPENSUC'
    | 'REFUND'
    | 'DROP';
  maxLicenseNum?: number;
  organizationId?: string;
  ownerId?: string;
  ownerName?: string;
  usedLicenseNum?: number;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * instanceId
   */
  instanceId?: string;
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
export type Response = PaginatedValInstanceOrganizationModel;

const path = '/api/v2/system/instance/list';
const method = 'get';
