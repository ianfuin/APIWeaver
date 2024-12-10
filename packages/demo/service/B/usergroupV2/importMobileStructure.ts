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

export type Body = OrgStructureSynImportModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/usergroup/importOrgStructure';
const method = 'post';
