export interface LockDTO {
  workId?: string;
  workType?: string;
}

export type Body = LockDTO;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/lock/releaseLock';
const method = 'post';
