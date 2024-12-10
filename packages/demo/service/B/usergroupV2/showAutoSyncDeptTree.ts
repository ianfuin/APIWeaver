export interface OrgStructureShowRespModel {
  existed?: TreeValOrgStructureNodeModel;
  mobile?: TreeValOrgStructureNodeModel;
  platform?: number;
}
export interface TreeValOrgStructureNodeModel {
  children?: TreeValOrgStructureNodeModel[];
  parent?: OrgStructureNodeModel;
}
export interface Query {
  /**
   * downstreamCorpId
   */
  downstreamCorpId?: string;
}

export interface Path {
  /**
   * mobileType
   */
  mobileType: string;
}

/**
 * OK
 */
export type Response = OrgStructureShowRespModel;

const path = '/api/v2/usergroup/showAutoSyncDeptTree/{mobileType}';
const method = 'get';
