export interface FormDataAccessPaginatedQuery {
  formId?: string;
  keyword?: string;
  pageNum?: number;
  pageSize?: number;
  resourceTypes?: string[];
  sortBy?: string;
  sortType?: string;
  statuses?: number[];
}

export type Body = FormDataAccessPaginatedQuery;

/**
 * OK
 */
export type Response = number;

const path = '/api/v2/formData/approval/count';
const method = 'post';
