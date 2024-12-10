export interface OssTableModel {
  columns?: OssColumnModel[];
  comment?: string;
  dsId?: string;
  fileFormat?: 'TEXTFILE' | 'RCFILE' | 'ORC' | 'PARQUET';
  key?: string;
  rowFormat?: OssRowFormat;
  tableName?: string;
}
export interface OssColumnModel {
  columnName?: string;
  columnType?: 'BIGINT' | 'DOUBLE' | 'VARCHAR' | 'DATE' | 'TIME';
  comment?: string;
}
export interface OssRowFormat {
  escapedCharacter?: string;
  terminatedCharacter?: string;
}

export type Body = OssTableModel;

/**
 * OK
 */
export type Response = object;

const path = '/restapi/oss/createTable';
const method = 'post';
