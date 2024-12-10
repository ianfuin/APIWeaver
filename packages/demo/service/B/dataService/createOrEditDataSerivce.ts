export interface DataServiceEvent {
  content?: DataServiceModel;
  cubeId?: string;
  desc?: string;
  name?: string;
  organizationId?: string;
  sid?: string;
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

export type Body = DataServiceEvent;

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/dataservice';
const method = 'post';
