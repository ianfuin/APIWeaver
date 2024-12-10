export interface UserTagModifyEvent {
  organizationId?: string;
  tagId?: string;
  userValues?: object;
}

export type Body = UserTagModifyEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/usertag/table';
const method = 'put';
