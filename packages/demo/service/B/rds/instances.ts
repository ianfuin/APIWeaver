export interface DBInstance {
  autoUpgradeMinorVersion?: string;
  category?: string;
  connectionMode?: string;
  createTime?: string;
  dbinstanceClass?: string;
  dbinstanceDescription?: string;
  dbinstanceId?: string;
  dbinstanceNetType?: string;
  dbinstanceStatus?: string;
  dbinstanceStorageType?: string;
  dbinstanceType?: string;
  dedicatedHostGroupId?: string;
  dedicatedHostGroupName?: string;
  dedicatedHostIdForLog?: string;
  dedicatedHostIdForMaster?: string;
  dedicatedHostIdForSlave?: string;
  dedicatedHostNameForLog?: string;
  dedicatedHostNameForMaster?: string;
  dedicatedHostNameForSlave?: string;
  dedicatedHostZoneIdForLog?: string;
  dedicatedHostZoneIdForMaster?: string;
  dedicatedHostZoneIdForSlave?: string;
  destroyTime?: string;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  guardDBInstanceId?: string;
  insId?: number;
  instanceNetworkType?: string;
  lockMode?: string;
  lockReason?: string;
  masterInstanceId?: string;
  mutriORsignle?: boolean;
  payType?: string;
  readOnlyDBInstanceIds?: ReadOnlyDBInstanceId[];
  regionId?: string;
  replicateId?: string;
  resourceGroupId?: string;
  tempDBInstanceId?: string;
  vpcCloudInstanceId?: string;
  vpcId?: string;
  vpcName?: string;
  vswitchId?: string;
  zoneId?: string;
}
export interface ReadOnlyDBInstanceId {
  dbinstanceId?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId?: string;
}

/**
 * OK
 */
export type Response = DBInstance[];

const path = '/api/v2/datasource/rds/instances';
const method = 'get';
