export interface OrgStructureSynImportModel {
  checkModel?: OrgStructureCheckModel;
  downstreamCorpId?: string;
  mobileType?: string;
  orgStructTree?: TreeValOrgStructureNodeModel;
  roleList?: number[];
  userType?: number;
}
export interface OrgStructureCheckModel {
  needDelNodeList?: ChangeNode[];
  needUpdateNodeList?: ChangeNode[];
}
export interface TreeValOrgStructureNodeModel {
  children?: TreeValOrgStructureNodeModel[];
  parent?: OrgStructureNodeModel;
}
export interface ChangeNode {
  newParentUsergroupIds?: string[];
  newParentUsergroupNames?: string[];
  nodeId?: string;
  nodeName?: string;
  nodeType?: string;
  oldParentUsergroupIds?: string[];
  oldParentUsergroupNames?: string[];
  realIdInUserGroup?: string;
}

export type Body = OrgStructureSynImportModel;

/**
 * OK
 */
export type Response = OrgStructureCheckModel;

const path = '/api/v2/usergroup/checkOrgStructure';
const method = 'post';
