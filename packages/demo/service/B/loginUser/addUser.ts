export interface LoginUserEvent {
  accountName?: string;
  email?: string;
  isAdmin?: boolean;
  nickName?: string;
  operator?: string;
  organizationId?: string;
  phone?: string;
  userType?: number;
}

export type Body = LoginUserEvent;

/**
 * OK
 */
export type Response = object;

const path = '/restapi/loginUser/addUser';
const method = 'post';
