export interface UserEvent {
  userAvatarType?: string;
  userAvatarUrl?: string;
  userEmail?: string;
  userId?: string;
  userPhone?: string;
}

export type Body = UserEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/user/modifyUserInfo';
const method = 'put';
