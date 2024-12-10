export interface ComponentDataModel {
  componentId?: string;
  componetValue?: object;
  label?: string;
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
  /**
   * id
   */
  id: string;
}

/**
 * OK
 */
export type Response = ComponentDataModel[];

const path = '/api/v2/dataForm/{formId}/data/{id}';
const method = 'get';
