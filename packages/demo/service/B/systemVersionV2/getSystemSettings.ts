export interface UserSystemSettingModel {
  admin?: boolean;
  authAdmin?: boolean;
  avatarType?: number;
  beginner?: boolean;
  beginnerTask?: BeginnerTaskModel;
  corpWxBoundInfo?: MobileBoundInfoModel;
  dingtalkBoundInfo?: MobileBoundInfoModel;
  feishuBoundInfo?: MobileBoundInfoModel;
  homePageType?: number;
  isAdmin?: boolean;
  isAuthAdmin?: boolean;
  isBeginner?: boolean;
  isOpenTemplateSync?: boolean;
  isOrganizationOwner?: boolean;
  logoutUrl?: string;
  organizationId?: string;
  organizationOwner?: boolean;
  personalWorkspaceId?: string;
  personalWorkspaceUseComment?: boolean;
  showBeginnerGuide?: boolean;
  themeDemo?: string;
  user?: UserInfo;
  userAvatarType?: string;
  userAvatarUrl?: string;
  userType?: number;
}
export interface BeginnerTaskModel {
  cube?: number;
  dashboard?: number;
  datasource?: number;
  demo?: number;
  screen?: number;
  upload?: number;
}
export interface MobileBoundInfoModel {
  appKey?: string;
  bounded?: boolean;
  corpBounded?: boolean;
  gotoUrl?: string;
  is3rd?: boolean;
  jumpUrl?: string;
  loginUrl?: string;
  nick?: string;
}
export interface UserInfo {
  accountName?: string;
  accountType?: number;
  baseId?: string;
  nickName?: string;
  userId?: string;
  yunAccount?: string;
}

/**
 * OK
 */
export type Response = UserSystemSettingModel;

const path = '/api/v2/system/settings';
const method = 'get';
