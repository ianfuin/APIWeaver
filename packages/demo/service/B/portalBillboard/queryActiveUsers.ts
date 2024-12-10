export interface ActiveUserEntityModel {
  avatarType?: number;
  entityId?: string;
  entityName?: string;
  gmtCreate?: string;
  gmtModify?: string;
  queryCount?: string;
  userAvatarUrl?: string;
}

/**
 * OK
 */
export type Response = ActiveUserEntityModel[];

const path = '/api/v2/portal/billboard/queryActiveUsers';
const method = 'get';
