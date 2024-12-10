export interface BeatDTO {
  modified?: boolean;
  workId?: string;
  workType?: string;
}
export interface UserDTO {
  nickName?: string;
  userId?: string;
}

export type Body = BeatDTO;

/**
 * OK
 */
export type Response = UserDTO;

const path = '/api/v2/lock/heartBeat';
const method = 'post';
