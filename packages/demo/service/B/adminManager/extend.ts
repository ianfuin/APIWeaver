export interface ExtendDO {
  accountId?: string;
  date?: string;
  operator?: string;
  version?: number;
}

export type Body = ExtendDO;

/**
 * OK
 */
export type Response = object;

const path = '/restapi/admin/extend';
const method = 'post';
