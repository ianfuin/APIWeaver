export interface DataServiceVO {
  content?: DataServiceModel;
  creatorId?: string;
  creatorName?: string;
  cubeId?: string;
  cubeName?: string;
  desc?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: string;
  modifierId?: string;
  modifierName?: string;
  name?: string;
  organizationId?: string;
  ownerId?: string;
  ownerName?: string;
  permissionList?: string[];
  sid?: string;
  status?: number;
  type?: number;
  workspaceId?: string;
}
export interface DataServiceModel {
  cubeId?: string;
  cubeName?: string;
  detail?: boolean;
  filter?: ComplexFilterModel;
  limit?: number;
  returnFields?: SelectFieldModel[];
  version?: string;
}

export interface Path {
  /**
   * sid
   */
  sid: string;
}

/**
 * OK
 */
export type Response = DataServiceVO;

const path = '/api/v2/dataservice/{sid}';
const method = 'get';
