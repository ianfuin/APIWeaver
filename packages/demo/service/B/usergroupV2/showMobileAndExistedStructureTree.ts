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
  /**
   * departmentId
   */
  departmentId?: string;
  /**
   * keyword
   */
  keyword?: string;
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

const path = '/api/v2/usergroup/showOrgStructure/{mobileType}';
const method = 'get';
