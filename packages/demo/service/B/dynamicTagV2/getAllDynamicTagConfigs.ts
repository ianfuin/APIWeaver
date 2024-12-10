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

/**
 * OK
 */
export type Response = DynamicTagModel;

const path = '/api/v2/dynamicTag/config/all';
const method = 'get';
