export interface SystemSettingModel {
  aMapApiKey?: string;
  accountLoginDeviceLimit?: number;
  adminList?: string;
  aliBucLoginEnable?: boolean;
  aliyunLoginEnable?: boolean;
  aliyunPrivateLoginEnable?: boolean;
  allowDeviceLimit?: boolean;
  allowDeviceWhitelist?: string;
  allowReLogin?: boolean;
  casEnable?: boolean;
  configPageEnable?: boolean;
  corpWeixinEnable?: boolean;
  customLoginEnable?: boolean;
  defaultCookieExpired?: number;
  defaultSesionExpired?: number;
  dingDingEnable?: boolean;
  feishuEnable?: boolean;
  forceHttps?: boolean;
  hostRegister?: string;
  ignoreHttpsCert?: boolean;
  initPass?: string;
  ldapEnable?: boolean;
  lydaasLoginEnable?: boolean;
  oauth20Enable?: boolean;
  oldQbiUser?: boolean;
  ramOauth20Enable?: boolean;
  samlEnable?: boolean;
  standardSsoLoginEnable?: boolean;
  systemAk?: string;
  systemSk?: string;
  tailChain?: string;
  taobaoLoginEnable?: boolean;
  whiteUrls?: string;
}

export type Body = SystemSettingModel;

const path = '/auth_sso/loginPage/systemSettings/merge';
const method = 'post';
