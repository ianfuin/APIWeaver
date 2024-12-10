export interface SystemInfoVO {
  driverModels?: SystemNodeExtendInfo[];
  executorModels?: SystemNodeExtendInfo[];
  runningDriverCount?: number;
  runningExecutorCount?: number;
  runningNodesCount?: number;
  taskToken?: string;
}
export interface SystemNodeExtendInfo {
  activityType?: number;
  driver?: boolean;
  executor?: boolean;
  healthyType?: number;
  ip?: string;
  lastHeartbeatTime?: string;
  port?: number;
  registryTime?: string;
  taskMode?: number;
}

/**
 * OK
 */
export type Response = SystemInfoVO;

const path = '/api/v2/system/devops/infos';
const method = 'get';
