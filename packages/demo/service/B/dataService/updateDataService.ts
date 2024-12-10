export interface DataServiceModel {
  cubeId?: string;
  cubeName?: string;
  detail?: boolean;
  filter?: ComplexFilterModel;
  limit?: number;
  returnFields?: SelectFieldModel[];
  version?: string;
}
export interface ComplexFilterModel {
  filters?: AbstractFilter[];
  logicalOperator?: string;
  type?: string;
}
export interface SelectFieldModel {
  aggregator?: string;
  alias?: string;
  desc?: string;
  field?: FieldModel;
  orderby?: string;
}

export interface Path {
  /**
   * sid
   */
  sid: string;
}
export type Body = DataServiceModel;

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/dataservice/{sid}/model';
const method = 'put';
