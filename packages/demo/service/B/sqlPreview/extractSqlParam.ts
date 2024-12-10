export interface SqlParamExtractEvent {
  encoded?: boolean;
  sqlText?: string;
}
export interface SqlParamDTO {
  fields?: string[];
  name?: string;
  statement?: string;
  style?: string;
  type?: string;
}

export type Body = SqlParamExtractEvent;

/**
 * OK
 */
export type Response = SqlParamDTO[];

const path = '/api/v2/sql/extractSqlParam';
const method = 'post';
