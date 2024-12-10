export interface PaginatedValDataServiceVO {
  data?: DataServiceVO[];
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
export interface DataServiceVO {
  content?: DataServiceModel;
  creatorId?: string;
  creatorName?: string;
  cubeId?: string;
  cubeName?: string;
  desc?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: string;
  modifierId?: string;
  modifierName?: string;
  name?: string;
  organizationId?: string;
  ownerId?: string;
  ownerName?: string;
  permissionList?: string[];
  sid?: string;
  status?: number;
  type?: number;
  workspaceId?: string;
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
   * type
   */
  type?: string;
  /**
   * pageNo
   */
  pageNo?: number;
  /**
   * pageSize
   */
  pageSize?: number;
}

/**
 * OK
 */
export type Response = PaginatedValDataServiceVO;

const path = '/api/v2/dataservice/list';
const method = 'get';
