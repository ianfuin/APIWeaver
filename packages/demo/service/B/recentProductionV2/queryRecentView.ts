export interface RecentVisitWorksDTO {
  catalogId?: string;
  catalogName?: string;
  gmtCreate?: string;
  gmtModified?: string;
  hasAuth?: boolean;
  hasEditAuth?: boolean;
  isFavorite?: string;
  latestViewTime?: string;
  organization?: OrganizationVO;
  ownerId?: string;
  ownerName?: string;
  subType?: number;
  viewCount?: number;
  worksId?: string;
  worksName?: string;
  worksType?: string;
  workspaceId?: string;
  workspaceName?: string;
}
export interface OrganizationVO {
  organizationId?: string;
  organizationName?: string;
  quanYuOrganization?: boolean;
}
export interface Query {
  /**
   * keyword
   */
  keyword?: string;
  /**
   * type
   */
  type: string;
  /**
   * pageNo
   */
  pageNo?: number;
  /**
   * pageSize
   */
  pageSize?: number;
  /**
   * offsetDay
   */
  offsetDay?: number;
}

/**
 * OK
 */
export type Response = RecentVisitWorksDTO[];

const path = '/api/v2/recent/view';
const method = 'get';
