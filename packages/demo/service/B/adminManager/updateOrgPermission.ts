export interface OrgModifyDO {
  description?: string;
  id?: number;
  invalidTime?: string;
  key?: string;
  open?: string;
  operator?: string;
  orgId?: string;
}

export type Body = OrgModifyDO;

/**
 * OK
 */
export type Response = boolean;

const path = '/restapi/admin/updateOrgPermission';
const method = 'post';
