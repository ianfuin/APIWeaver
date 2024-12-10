export interface ExportParamModel {
  componentIds?: string[];
  dataIds?: string[];
  filter?: object;
  menuId?: string;
}

export interface Path {
  /**
   * formId
   */
  formId: string;
}
export type Body = ExportParamModel;

const path = '/api/v2/exportData/{formId}/export/excel';
const method = 'post';
