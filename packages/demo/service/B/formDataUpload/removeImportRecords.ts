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
export type Body = number[];

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/importData/{formId}/record/delete';
const method = 'post';
