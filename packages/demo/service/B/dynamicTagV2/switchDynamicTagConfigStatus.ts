export interface DynamicTagModel {
  columnName?: string;
  configId?: string;
  configName?: string;
  dsId?: string;
  isOpen?: number;
  organizationId?: string;
  relatedAttribute?: number;
  tableName?: string;
}
export interface Query {
  /**
   * configId
   */
  configId: string;
  /**
   * isOpen
   */
  isOpen: number;
}

/**
 * OK
 */
export type Response = DynamicTagModel;

const path = '/api/v2/dynamicTag/config/open';
const method = 'post';
