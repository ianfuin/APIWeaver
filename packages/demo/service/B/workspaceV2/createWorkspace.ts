export interface WorkspaceCreateEvent {
  allowAuthorize3rd?: boolean;
  allowExport?: boolean;
  allowPublish?: boolean;
  allowShare?: boolean;
  allowViewAll?: boolean;
  defaultShareToAll?: boolean;
  isDefault?: boolean;
  onlyAdminCreateDatasource?: boolean;
  operator?: string;
  organizationId?: string;
  shareOutsideOrganization?: boolean;
  useComment?: boolean;
  worksSyncCubeFieldComment?: boolean;
  workspaceDesc?: string;
  workspaceId?: string;
  workspaceName?: string;
}
export interface WorkspaceDO {
  allowAuthorize3rd?: boolean;
  allowExport?: boolean;
  allowPublish?: boolean;
  allowShare?: boolean;
  allowViewAll?: boolean;
  createUser?: string;
  createUserAccountName?: string;
  cubeCnt?: number;
  dashboardCnt?: number;
  dataProductCnt?: number;
  defaultShareToAll?: boolean;
  etlDefaultDsId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  isDefault?: boolean;
  isDemo?: boolean;
  memberCnt?: number;
  modifyUser?: string;
  modifyUserAccountName?: string;
  onlyAdminCreateDatasource?: boolean;
  organizationId?: string;
  owner?: string;
  ownerAccountName?: string;
  roleId?: number;
  roleList?: number[];
  shareOutsideOrganization?: boolean;
  status?: number;
  useComment?: boolean;
  worksSyncCubeFieldComment?: boolean;
  workspaceDesc?: string;
  workspaceId?: string;
  workspaceName?: string;
  workspaceType?: number;
}

export type Body = WorkspaceCreateEvent;

/**
 * OK
 */
export type Response = WorkspaceDO;

const path = '/api/v2/ws';
const method = 'post';
