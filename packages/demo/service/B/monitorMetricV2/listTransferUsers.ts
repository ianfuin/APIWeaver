export interface UserDTO {
  nickName?: string;
  userId?: string;
}

export type Body = string[];

/**
 * OK
 */
export type Response = UserDTO[];

const path = '/api/v2/monitor/metric/listTransferUsers';
const method = 'post';
