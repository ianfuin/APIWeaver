export interface TreeValUsergroupModel {
  children?: TreeValUsergroupModel[];
  parent?: UsergroupModel;
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
export interface Query {
  /**
   * keyword
   */
  keyword?: string;
}

/**
 * OK
 */
export type Response = TreeValUsergroupModel;

const path = '/api/v2/usergroup/listOrganization';
const method = 'get';
