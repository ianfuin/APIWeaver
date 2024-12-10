export interface FavoriteAndProductionDO {
  catalogId?: string;
  catalogName?: string;
  createTime?: string;
  favoriteId?: number;
  hasAuth?: boolean;
  hasEditAuth?: boolean;
  isValid?: string;
  mobileDefault?: boolean;
  modifyUser?: string;
  modifyUserId?: string;
  organization?: OrganizationVO;
  ownerName?: string;
  ownerNum?: string;
  permissionList?: string[];
  productionGmtCreate?: string;
  productionGmtModified?: string;
  productionId?: string;
  productionName?: string;
  productionType?: string;
  subType?: number;
  top?: boolean;
  updateTime?: string;
  userId?: string;
  userName?: string;
  version?: string;
  workspaceId?: string;
  workspaceName?: string;
  workspaceType?: number;
}
export interface OrganizationVO {
  organizationId?: string;
  organizationName?: string;
  quanYuOrganization?: boolean;
}
export interface Query {
  /**
   * userId
   */
  userId: string;
}

/**
 * OK
 */
export type Response = FavoriteAndProductionDO[];

const path = '/api/v2/favorite/listByUserId';
const method = 'get';
