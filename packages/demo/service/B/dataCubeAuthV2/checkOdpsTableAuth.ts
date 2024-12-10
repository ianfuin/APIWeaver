export interface TableAuthModel {
  dsId?: string;
  tableNames?: string;
}

export type Body = TableAuthModel;

/**
 * OK
 */
export type Response = string[];

const path = '/api/v2/datacube/odps/check';
const method = 'post';
