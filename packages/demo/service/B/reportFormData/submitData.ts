export interface ReportFormDataParam {
  delete?: MapStringObject[];
  insert?: MapStringObject[];
  /**
   * 电子表格ID
   */
  reportId?: string;
  /**
   * 电子表格sheetId，仅支持单sheet提交
   */
  sheetId?: string;
  update?: FormUpdateDataParam[];
}
export type MapStringObject = object;
export interface FormUpdateDataParam {
  filter?: object;
  value?: object;
}

export type Body = ReportFormDataParam;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/reportForm/data/submit';
const method = 'post';
