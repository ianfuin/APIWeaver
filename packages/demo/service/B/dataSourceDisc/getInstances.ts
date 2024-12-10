export interface DBDiscInstanceModel {
  accounts?: string[];
  connectionUrl?: string;
  databases?: string[];
  dbInstanceId?: string;
  dbInstanceStatus?: string;
  displayName?: string;
  engine?: string;
  engineVersion?: string;
  networkType?: string;
  port?: string;
  projects?: string[];
  regionId?: string;
  regionName?: string;
}
export interface Query {
  /**
   * instanceType
   */
  instanceType: string;
  /**
   * rdsType
   */
  rdsType?: string;
}

/**
 * OK
 */
export type Response = DBDiscInstanceModel[];

const path = '/api/v2/datasource/discovery/instances';
const method = 'get';
