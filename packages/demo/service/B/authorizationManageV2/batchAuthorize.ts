export interface AuthorizeModel {
  authPoints?: number;
  authorizeScope?: number;
  authorizedId?: string;
  expireDay?: string;
  resourceId?: string;
  resourceType?: string;
  workspaceId?: string;
}

export type Body = AuthorizeModel[];

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/authorize/batchAuthorize';
const method = 'post';
