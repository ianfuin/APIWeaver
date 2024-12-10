export interface MoveUsergroupEvent {
  currentUsergroupId?: string;
  parentUsergroupIdAfterMove?: string;
  preUsergroupIdAfterMove?: string;
}

export type Body = MoveUsergroupEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/usergroup/moveUsergroup';
const method = 'post';
