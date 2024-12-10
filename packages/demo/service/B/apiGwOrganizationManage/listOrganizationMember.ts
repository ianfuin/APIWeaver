export interface OrganizationMemberListModel {
  organizationInfo?: OrganizationDO;
  organizationMemberList?: OrganizationMemberModel[];
  organizationMemberTotal?: number;
}
export interface OrganizationDO {
  createUser?: string;
  gmtCreate?: string;
  gmtModified?: string;
  grayVersion?: number;
  id?: number;
  modifyUser?: string;
  organizationComment?: string;
  organizationId?: string;
  organizationName?: string;
  owner?: string;
  ownerAccountName?: string;
  status?: number;
}
export interface OrganizationMemberModel {
  accountName?: string;
  admin?: boolean;
  authAdmin?: boolean;
  nickname?: string;
  organizationId?: string;
  userId?: string;
}

export interface Path {
  /**
   * organizationId
   */
  organizationId: string;
}

/**
 * OK
 */
export type Response = OrganizationMemberListModel;

const path =
  '/restapi/openAPI/organizationManage/organizationMember/list/{organizationId}';
const method = 'get';
