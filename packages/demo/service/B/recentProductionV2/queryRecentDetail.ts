export interface RecentProductionDTO {
  catalogName?: string;
  gmtModified?: number;
  isFavorite?: string;
  modifyUser?: string;
  operation?: string;
  operator?: string;
  organization?: OrganizationVO;
  ownerName?: string;
  productionGmtCreate?: number;
  productionGmtModified?: number;
  productionId?: string;
  productionName?: string;
  productionType?: string;
  subType?: number;
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
   * limit
   */
  limit?: number;
}

/**
 * OK
 */
export type Response = RecentProductionDTO[];

const path = '/api/v2/recent/detail';
const method = 'get';
