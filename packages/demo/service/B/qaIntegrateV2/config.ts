export interface QaIntegrateFieldsConfigVO {
  encryptTypeList?: ShowType[];
  mappingTypeList?: ShowType[];
}
export interface ShowType {
  name?: string;
  type?: string;
}

/**
 * OK
 */
export type Response = QaIntegrateFieldsConfigVO;

const path = '/api/v2/qaIntegration/audience/config';
const method = 'get';
