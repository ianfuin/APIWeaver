export interface Query {
  /**
   * filter
   */
  filter: string;
  /**
   * dsId
   */
  dsId: string;
  /**
   * tableName
   */
  tableName: string;
  /**
   * columnName
   */
  columnName: string;
  /**
   * formId
   */
  formId?: string;
}

/**
 * OK
 */
export type Response = string[];

const path = '/api/v2/component/data/cascader';
const method = 'get';
