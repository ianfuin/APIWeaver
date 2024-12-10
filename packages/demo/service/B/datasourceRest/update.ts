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
export interface ConnectionInfoConfig {
  accessId?: string;
  accessKey?: string;
  allowFullScan?: boolean;
  category?: string;
  characterEncoding?: string;
  endPointDomain?: string;
  engine?: string;
  engineType?: string;
  envType?: string;
  fallbackQuota?: string;
  fromTemplate?: string;
  hiveConnectionType?: string;
  hiveMetastoreUri?: string;
  hostConfig?: HostConfig;
  initialSql?: string;
  instanceId?: string;
  instanceIp?: string;
  kerberosEnable?: KerberosEnableConfig;
  mcqa?: string;
  netType?: string;
  onEcsMappingIp?: string;
  onEcsMappingPort?: string;
  region?: string;
  requireSSL?: string;
  resource?: string;
  sparkDetect?: string;
  ssh?: SshConfig;
  ssl?: string;
  timeZone?: string;
  uploadFile?: string;
  verifyServerCertificate?: string;
  vpcId?: string;
  vpcIp?: string;
  vpcPort?: string;
}
export interface Query {
  /**
   * refresh
   */
  refresh?: boolean;
  /**
   * workspaceId
   */
  workspaceId?: string;
}

export interface Path {
  /**
   * dsId
   */
  dsId: string;
}
export type Body = ConnectionConfig;

/**
 * OK
 */
export type Response = string;

const path = '/restapi/datasource/{dsId}';
const method = 'put';
