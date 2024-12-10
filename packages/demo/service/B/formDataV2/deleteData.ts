export interface WriteFormDataModel {
  approverId?: string;
  dataList?: FormDataModel[];
  formId?: string;
}
export interface FormDataModel {
  data?: object;
  dataId?: string;
}
export interface Query {
  /**
   * menuId
   */
  menuId?: string;
}

export interface Path {
  /**
   * formId
   */
  formId: string;
}
export type Body = WriteFormDataModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dataForm/{formId}/data/delete';
const method = 'post';
