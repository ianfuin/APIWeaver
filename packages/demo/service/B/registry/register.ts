export interface RegisterModel {
  activityType?: string;
  appId?: string;
  envFlag?: string;
  instanceId?: string;
  ip?: string;
  mappingIp?: string;
  mappingIpRpc?: string;
  mappingPort?: string;
  mappingPortRpc?: string;
  port?: string;
  portRpc?: string;
  region?: string;
  registerTime?: string;
  vpcId?: string;
  workload?: string;
}
export interface RespModel {
  info?: string;
  success?: boolean;
}

export type Body = RegisterModel;

/**
 * OK
 */
export type Response = RespModel;

const path = '/bichannel/register';
const method = 'post';
