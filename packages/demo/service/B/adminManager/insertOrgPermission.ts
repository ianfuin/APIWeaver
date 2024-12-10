export interface OrgInsertDO {
  description?: string;
  invalidTime?: string;
  key?: string;
  open?: string;
  operator?: string;
  orgId?: string;
}

export type Body = OrgInsertDO;

/**
 * OK
 */
export type Response = boolean;

const path = '/restapi/admin/insertOrgPermission';
const method = 'post';
