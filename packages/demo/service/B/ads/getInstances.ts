export interface DBInstanceModel {
  dbName?: string;
  host?: string;
  networkType?: string;
  port?: string;
  regionId?: string;
  regionName?: string;
  url?: string;
}

/**
 * OK
 */
export type Response = DBInstanceModel[];

const path = '/api/v2/datasource/ads/instances';
const method = 'get';
