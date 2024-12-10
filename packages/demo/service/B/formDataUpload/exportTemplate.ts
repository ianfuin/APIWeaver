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

const path = '/api/v2/importData/{formId}/export/template';
const method = 'get';
