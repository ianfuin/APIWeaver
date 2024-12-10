export interface PaginatedValUsergroupModel {
  data?: UsergroupModel[];
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
export interface UsergroupModel {
  createUser?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  identifiedPath?: string;
  identifiedPathName?: string;
  modifyUser?: string;
  organizationId?: string;
  parentUsergroupId?: string;
  relatedMobileId?: string;
  sortedKey?: number;
  usergroupDesc?: string;
  usergroupId?: string;
  usergroupName?: string;
  usergroupType?: string;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  organizationId?: string;
  keyword?: string;
  sortBy?: string;
  sortType?: string;
  pageNum?: number;
  pageSize?: number;
}

/**
 * OK
 */
export type Response = PaginatedValUsergroupModel;

const path = '/api/v2/usergroup/pagingList';
const method = 'get';
