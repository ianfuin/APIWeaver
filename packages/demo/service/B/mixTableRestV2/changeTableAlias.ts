export interface TableRenameModel {
  dsId?: string;
  newTableAlias?: string;
  tableId?: string;
}

export type Body = TableRenameModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/mix/table/tableAlias';
const method = 'put';
