export interface Path {
  /**
   * 用户组id
   */
  userGroupId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/restapi/apigw/v1/usergroup/delete/{userGroupId}';
const method = 'delete';
