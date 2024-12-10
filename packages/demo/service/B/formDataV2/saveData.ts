export interface SaveFormDataModel {
  approverId?: string;
  data?: object;
  formId?: string;
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
export type Body = SaveFormDataModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dataForm/{formId}/data';
const method = 'post';
