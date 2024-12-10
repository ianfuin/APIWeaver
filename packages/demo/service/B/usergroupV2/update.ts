export interface UsergroupUpdateModel {
  operator?: string;
  usergroupDesc?: string;
  usergroupId?: string;
  usergroupName?: string;
}

export type Body = UsergroupUpdateModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/usergroup';
const method = 'put';
