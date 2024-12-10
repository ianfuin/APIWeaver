export interface DeleteTableModel {
  dsId?: string;
  tableName?: string;
}

export type Body = DeleteTableModel;

/**
 * OK
 */
export type Response = object;

const path = '/restapi/oss/deleteTable';
const method = 'post';
