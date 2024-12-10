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

export type Body = DynamicTagModel;

/**
 * OK
 */
export type Response = DynamicTagModel;

const path = '/api/v2/dynamicTag/config';
const method = 'post';
