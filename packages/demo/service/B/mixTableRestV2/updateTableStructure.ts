export interface TableModifyColumnModel {
  columnDisplayName?: string;
  columnName?: string;
  columnType?: string;
  dsId?: string;
  newColumnType?: string;
  operatorType?: string;
  tableId?: string;
}

export type Body = TableModifyColumnModel[];

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/mix/table/tableStructure';
const method = 'put';
