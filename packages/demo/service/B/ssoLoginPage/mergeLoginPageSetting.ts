export interface LoginPageModel {
  aliyunLoginSettings?: AliyunLoginModel;
  aliyunRamWithOauthLoginSettings?: AliyunRamWithOauthLoginModel;
  ascmLoginModel?: AscmLoginModel;
  background?: string;
  backgroundStyle?: string;
  bucLoginSettings?: BucLoginModel;
  casLoginSetting?: CasLoginModel;
  corpWeixinLoginSettings?: CorpWeixinLoginModel;
  creator?: string;
  customLoginSettings?: CustomLoginModel;
  defaultStrategy?: boolean;
  dingtalkLoginSettings?: DingtalkLoginModel;
  domain?: string;
  extraConfig?: object;
  feishuLoginSettings?: FeishuLoginModel;
  footer?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  ldapLoginSettings?: LdapLoginModel;
  loginDialogColor?: string;
  loginTypes?: string[];
  logo?: string;
  lydaasLoginModel?: LydaasLoginModel;
  modifier?: string;
  oAuthLoginSettings?: OAuthLoginModel;
  position?: number;
  rule?: RuleConfig;
  samlLoginSettings?: SamlLoginModel;
  showStyle?: number;
  standardSsoLoginSettings?: StandardSsoLoginModel;
  strategyDesc?: string;
  strategyId?: string;
  taobaoLoginSettings?: TaobaoLoginModel;
  themeColor?: string;
  title?: string;
}
export interface AliyunLoginModel {
  accessId?: string;
  env?: string;
  secretKey?: string;
}
export interface AliyunRamWithOauthLoginModel {
  accessTokenAdditionalParam?: string;
  accessTokenUrl?: string;
  authHeaderType?: string;
  authServerUrl?: string;
  clientId?: string;
  clientSecret?: string;
  cookiesExpire?: string;
  ico?: string;
  logoutUrl?: string;
  scope?: string;
  sessionExpire?: string;
  title?: string;
  userInfoAdditionalParam?: string;
  userInfoUrl?: string;
}
export interface AscmLoginModel {
  accountServiceApi?: string;
  accountServiceKey?: string;
  accountServiceSecret?: string;
}
export interface BucLoginModel {
  appCode?: string;
  appName?: string;
  clientKey?: string;
}
export interface CasLoginModel {
  casLoginCookieExpiredSecs?: string;
  casLoginExpiredSecs?: string;
  casLoginMapAccountId?: string;
  casLoginMapAccountName?: string;
  casLoginMapEmail?: string;
  casLoginMapNick?: string;
  casLoginMapPhone?: string;
  casLoginUrl?: string;
  casLogoutUrl?: string;
  casServerUrl?: string;
  ico?: string;
  title?: string;
}
export interface CorpWeixinLoginModel {
  agentId?: string;
  agentSecret?: string;
  companyName?: string;
  corpId?: string;
  loginPageEnable?: boolean;
  verifyCode?: string;
  weixinExpired?: number;
}
export interface CustomLoginModel {
  captchaEnable?: boolean;
  expiredTime?: number;
  forcePasswordUpdate?: boolean;
  passwordUpdateInterval?: number;
}
export interface DingtalkLoginModel {
  appKey?: string;
  appSecret?: string;
  companyName?: string;
  corpId?: string;
  dingAgentId?: string;
  dingTalkExpired?: number;
  loginPageEnable?: boolean;
}
export interface FeishuLoginModel {
  appId?: string;
  appSecret?: string;
  companyName?: string;
  feishuExpired?: string;
  ico?: string;
  loginPageEnable?: boolean;
  tenantKey?: string;
}
export interface LdapLoginModel {
  accountPattern?: string;
  baseDn?: string;
  bindDn?: string;
  bindPassword?: string;
  ldapExpire?: number;
  serverIp?: string;
  serverPort?: string;
  useSsl?: boolean;
}
export interface LydaasLoginModel {
  lydaasAuthAk?: string;
  lydaasAuthDomain?: string;
  lydaasAuthGateway?: string;
  lydaasAuthSessionMode?: string;
  lydaasAuthSk?: string;
}
export interface OAuthLoginModel {
  accessTokenAdditionalParam?: string;
  accessTokenParamLocation?: string;
  accessTokenUrl?: string;
  accountIdJsonpath?: string;
  accountNameJsonpath?: string;
  authHeaderType?: string;
  authServerUrl?: string;
  clientId?: string;
  clientSecret?: string;
  cookiesExpire?: string;
  ico?: string;
  idpType?: string;
  logoutUrl?: string;
  nickJsonpath?: string;
  scope?: string;
  sessionExpire?: string;
  title?: string;
  userInfoAdditionalParam?: string;
  userInfoUrl?: string;
}
export interface RuleConfig {
  key?: string;
  operator?: 'EQUAL' | 'STARTWITH' | 'ENDWITH' | 'CONTAIN' | 'NOTNULL' | 'IN';
  point?: 'DOMAIN' | 'URI' | 'COOKIE' | 'HEADER' | 'URLPARAM';
  value?: string;
}
export interface SamlLoginModel {
  cert?: string;
  ico?: string;
  idpType?: string;
  loginUrl?: string;
  logoutUrl?: string;
  protocolBinding?: string;
  providerName?: string;
  samlExpired?: number;
  title?: string;
}
export interface StandardSsoLoginModel {
  accessKey?: string;
  cookieExpiredSecs?: number;
  crossDomain?: boolean;
  ico?: string;
  loginUrl?: string;
  loginValidApi?: string;
  logoutUrl?: string;
  secretKey?: string;
  sessionExpiredSecs?: number;
  ticketName?: string;
  title?: string;
  userInfoApi?: string;
}
export type TaobaoLoginModel = object;

export type Body = LoginPageModel;

const path = '/auth_sso/loginPage/merge';
const method = 'post';
