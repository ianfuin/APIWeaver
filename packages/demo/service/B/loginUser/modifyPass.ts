export interface ModifyUserPassEvent {
  newPass?: string;
  oldPass?: string;
  sessionId?: string;
  userId?: string;
}

export type Body = ModifyUserPassEvent;

/**
 * OK
 */
export type Response = object;

const path = '/restapi/loginUser/modifyPass';
const method = 'post';
