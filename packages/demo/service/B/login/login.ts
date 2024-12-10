export interface LoginModelEvent {
  in1?: string;
  in2?: string;
  in3?: string;
  in4?: string;
}

export type Body = LoginModelEvent;

/**
 * OK
 */
export type Response = object;

const path = '/restapi/login/login';
const method = 'post';
