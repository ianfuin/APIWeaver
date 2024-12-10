export interface ExpandSoasUserInfo {
  accessByTicket?: boolean;
  accessBytoken?: boolean;
  accountType?: number;
  aliyunId?: string;
  baseId?: string;
  completeDemoTask?: boolean;
  deleted?: boolean;
  displayName?: string;
  grayVersion?: number;
  hasDing?: boolean;
  hasFeishu?: boolean;
  hasMail?: boolean;
  hasPhone?: boolean;
  hasWeixin?: boolean;
  kp?: string;
  nickName?: string;
  orgRoleList?: number[];
  organizationGrayVersion?: number;
  organizationId?: string;
  parentAccount?: string;
  parentId?: string;
  qbiAccount?: boolean;
  sysTempAdmin?: boolean;
  taobaoNick?: string;
  trueName?: string;
  userDept?: string;
  userEmail?: string;
  userId?: string;
  userName?: string;
  userNumber?: string;
  userOrganizations?: object;
  userPhone?: string;
  userType?: string;
  version?: string;
  workspaceId?: string;
  wsRoles?: object;
  yunAccount?: string;
}

/**
 * OK
 */
export type Response = ExpandSoasUserInfo;

const path = '/api/v2/user/currentUserInfo';
const method = 'get';
