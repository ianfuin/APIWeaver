export interface ApplyRequestParam {
  order?: number;
  pageNo?: number;
  pageSize?: number;
  resourceType?: string;
  statuses?: number[];
}

export type Body = ApplyRequestParam;

/**
 * OK
 */
export type Response = number;

const path = '/api/v2/access/apply/count';
const method = 'post';
