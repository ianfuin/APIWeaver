export interface DashBoardPublishEvent {
  changeToken?: boolean;
  invalidTime?: string;
  pageId?: string;
  password?: string;
  usePassword?: boolean;
  userId?: string;
  workspaceId?: string;
}
export interface PublishToken {
  accessToken?: string;
  invalidTime?: string;
  pageId?: string;
  password?: string;
  publishUrl?: string;
  usePassword?: boolean;
  userName?: string;
}

export type Body = DashBoardPublishEvent;

/**
 * OK
 */
export type Response = PublishToken;

const path = '/api/v2/dashboard/publish';
const method = 'post';
