export interface DataDmlModel {
  cubeId?: string;
  dataList?: DataDmlBaseModel[];
  workspaceId?: string;
}
export interface DataDmlBaseModel {
  data?: DataDmlColumnModel[];
  operationType?: string;
  uniqueKey?: string;
}

export type Body = DataDmlModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dataDml/data';
const method = 'put';
