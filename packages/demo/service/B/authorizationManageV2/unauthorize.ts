export interface UnauthorizeModel {
  authIds?: string[];
  authPoint?: number;
  authorizeScope?: number;
  resourceIds?: string[];
  resourceType?: string;
  shareReportInfoDOList?: ShareReportInfoDO[];
}
export interface ShareReportInfoDO {
  authPointsValue?: number;
  detailName?: string;
  expireDate?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  nameOfShareTo?: string;
  reportId?: string;
  shareDelete?: number;
  shareFrom?: string;
  shareId?: string;
  shareInsert?: number;
  shareRead?: number;
  shareReportToType?: number;
  shareTo?: string;
  shareToPathId?: string;
  shareType?: string;
  shareUpdate?: number;
  treeType?: string;
  workspaceId?: string;
}

export type Body = UnauthorizeModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/authorize';
const method = 'delete';
