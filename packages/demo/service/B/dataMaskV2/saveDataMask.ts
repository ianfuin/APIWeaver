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

export type Body = DataMaskConfigModel;

const path = '/api/v2/dataMask/save';
const method = 'post';
