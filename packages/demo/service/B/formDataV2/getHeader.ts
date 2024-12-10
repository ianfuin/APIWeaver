export interface FormHeaderModel {
  component?: object;
  name?: string;
  type?: string;
  value?: string;
}
export interface Query {
  /**
   * false
   */
  editPage?: boolean;
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

/**
 * OK
 */
export type Response = FormHeaderModel[];

const path = '/api/v2/dataForm/{formId}/header';
const method = 'get';
