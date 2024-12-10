export interface PublishToken {
  accessToken?: string;
  invalidTime?: string;
  pageId?: string;
  password?: string;
  publishUrl?: string;
  usePassword?: boolean;
  userName?: string;
}

export interface Path {
  /**
   * pageId
   */
  pageId: string;
}

/**
 * OK
 */
export type Response = PublishToken;

const path = '/api/v2/dashboard/{pageId}/publishInfo';
const method = 'get';
