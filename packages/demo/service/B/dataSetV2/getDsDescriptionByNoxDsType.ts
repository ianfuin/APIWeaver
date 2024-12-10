export interface DatasourceDescription {
  aggFunctions?: string[];
  dateFormats?: string[];
  granularities?: string[];
}
export interface Query {
  /**
   * dsType
   */
  dsType: string;
}

/**
 * OK
 */
export type Response = DatasourceDescription;

const path = '/api/v2/dataset/getDsDescriptionByDsType';
const method = 'get';
