export interface ConnectionInfo {
  accelerationEngineOpen?: boolean;
  apiDsId?: string;
  authLevel?: number;
  authorizedUseType?: number;
  config?: ConnectionInfoConfig;
  creatorId?: string;
  creatorName?: string;
  dsCreateOrigin?: number;
  dsId?: string;
  dsType?: string;
  dsVersion?: string;
  gmtCreate?: string;
  gmtModified?: string;
  instance?: string;
  instanceKey?: string;
  noAuth?: boolean;
  password?: string;
  permissionList?: string[];
  project?: string;
  quickIndexOpen?: boolean;
  schema?: string;
  showName?: string;
  supportAcrossJoin?: boolean;
  supportCustomSql?: boolean;
  supportEtl?: boolean;
  supportFile?: boolean;
  supportQuickIndex?: boolean;
  url?: string;
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
   * workspaceId
   */
  workspaceId?: string;
}

export interface Path {
  /**
   * dsType
   */
  dsType: string;
}

/**
 * OK
 */
export type Response = ConnectionInfo;

const path = '/restapi/datasource/connections/{dsType}';
const method = 'get';
