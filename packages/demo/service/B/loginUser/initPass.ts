export interface InitUserPassModel {
  initPassword?: string;
  userId?: string;
}

export type Body = InitUserPassModel;

/**
 * OK
 */
export type Response = object;

const path = '/restapi/loginUser/initPass';
const method = 'post';
