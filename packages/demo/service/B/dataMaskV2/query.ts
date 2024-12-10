export interface DataMaskConfigModel {
  cubeId?: string;
  fields?: DataMaskFieldModel[];
  open?: number;
}
export interface DataMaskFieldModel {
  attributeId?: string;
  maskAuthType?: number;
  maskMethod?: number;
  userGroupIds?: string[];
  userIds?: string[];
}
export interface Query {
  /**
   * 数据集id
   */
  cubeId?: string;
  /**
   * queryDetail
   */
  queryDetail?: boolean;
}

/**
 * OK
 */
export type Response = DataMaskConfigModel;

const path = '/api/v2/dataMask/query';
const method = 'get';
