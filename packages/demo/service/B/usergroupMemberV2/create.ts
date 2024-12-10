export interface UsergroupMemberCreateEvent {
  userIds?: string;
  usergroupId?: string;
}

export type Body = UsergroupMemberCreateEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/usergroup/member';
const method = 'post';
