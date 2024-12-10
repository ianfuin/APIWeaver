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
   * userId
   */
  userId: string;
}

/**
 * OK
 */
export type Response = UsergroupModel[];

const path = '/api/v2/usergroup/listByUserId';
const method = 'get';
