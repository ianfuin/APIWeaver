export interface OrgStructureNodeUpdateModel {
  mobileType?: string;
  nodeList?: OrgStructureNodeModel[];
}
export interface OrgStructureNodeModel {
  nodeId?: string;
  nodeName?: string;
  nodeOrder?: number;
  nodeParentId?: string;
  nodePath?: string;
  nodeType?: string;
  realIdInUserGroup?: string;
  realParentIdInUserGroup?: string;
  realPathInUserGroup?: string;
  tag?: number;
}

export type Body = OrgStructureNodeUpdateModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/usergroup/updateContactNodeName';
const method = 'post';
