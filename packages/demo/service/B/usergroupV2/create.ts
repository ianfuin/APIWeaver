export interface UsergroupCreateModel {
  identifiedPath?: string;
  operator?: string;
  organizationId?: string;
  organizationStructureType?: string;
  parentUsergroupId?: string;
  relatedMobileId?: string;
  sortedKey?: number;
  usergroupDesc?: string;
  usergroupId?: string;
  usergroupName?: string;
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

export type Body = UsergroupCreateModel;

/**
 * OK
 */
export type Response = UsergroupModel;

const path = '/api/v2/usergroup';
const method = 'post';
