export interface DataViewLogDTO {
  count?: number;
  operationType?: string;
  operatorId?: string;
  ossUrl?: string;
  requestId?: string;
  sql?: string;
  targetId?: string;
  targetType?: string;
  workspaceId?: string;
}
export interface GeneralModelBoolean {
  requestId?: string;
  returnCode?: string;
  returnErrorOper?: string;
  returnErrorSolution?: string;
  returnMessage?: string;
  returnValue?: boolean;
}

export type Body = DataViewLogDTO;

/**
 * OK
 */
export type Response = GeneralModelBoolean;

const path = '/api/v2/auditlog/dataview';
const method = 'post';
