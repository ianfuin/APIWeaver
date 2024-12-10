export interface TableMetaByConfigParam {
  connConfig?: ConnectionConfig;
  fuzzyTableName?: string;
  pageNum?: number;
  pageSize?: number;
}
export interface TableDTO {
  comments?: string;
  dataSize?: number;
  dsId?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: 'txt' | 'csv' | 'xls' | 'xlsx';
  gmtModified?: string;
  name?: string;
}
export interface ConnectionConfig {
  accessId?: string;
  accessKey?: string;
  address?: string;
  authLevel?: number;
  belongType?: number;
  config?: ConnectionInfoConfig;
  creatorId?: string;
  dsCreateOrigin?: number;
  dsId?: string;
  dsType?: string;
  dsVersion?: string;
  encoded?: boolean;
  instance?: string;
  instanceId?: string;
  loginTicket?: string;
  modifyUser?: string;
  noSasl?: boolean;
  organizationId?: string;
  password?: string;
  port?: string;
  project?: string;
  region?: string;
  schema?: string;
  showName?: string;
  userName?: string;
  workspaceId?: string;
}

export type Body = TableMetaByConfigParam;

/**
 * OK
 */
export type Response = TableDTO;

const path = '/api/v2/metadata/listTable/byConfig';
const method = 'post';
