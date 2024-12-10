export interface LoginDeviceModel {
  browser?: string;
  currentWindow?: boolean;
  deviceType?: string;
  gmtLastLogin?: string;
  location?: string;
  loginIp?: string;
  os?: string;
  sessionId?: string;
}

/**
 * OK
 */
export type Response = LoginDeviceModel[];

const path = '/api/v2/auth_sso/device/list';
const method = 'get';
