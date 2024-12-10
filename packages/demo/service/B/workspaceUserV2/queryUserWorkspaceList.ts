export interface SoasUserInfo {
  accessByTicket?: boolean;
  accessBytoken?: boolean;
  accountType?: number;
  aliyunId?: string;
  baseId?: string;
  deleted?: boolean;
  displayName?: string;
  grayVersion?: number;
  kp?: string;
  nickName?: string;
  organizationGrayVersion?: number;
  organizationId?: string;
  parentAccount?: string;
  parentId?: string;
  qbiAccount?: boolean;
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
export type Response = SoasUserInfo;

const path = '/api/v2/workspaceUser/listUserWorkspace';
const method = 'get';
