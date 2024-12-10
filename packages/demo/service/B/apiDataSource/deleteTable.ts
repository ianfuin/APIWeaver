export interface ApiDatasourceDeleteDTO {
  apiId?: string;
  forceRemove?: boolean;
}

export type Body = ApiDatasourceDeleteDTO;

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/apiDataSource/table/delete';
const method = 'post';
