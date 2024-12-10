export interface SmartRobotTableConfigModel {
  columnInfo?: Column[];
  errorInfo?: string;
  lastSyncTime?: string;
  originTraceId?: string;
  robotId?: string;
  syncStatus?: number;
  tableDbName?: string;
  tableId?: string;
  tableShowName?: string;
  useScope?: number;
}
export interface Column {
  columnComment?: string;
  columnId?: string;
  columnName?: string;
  columnType?: string;
  synonymInfos?: SmartRobotSynonymInfo[];
}

export type Body = SmartRobotTableConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/smart/robot/table';
const method = 'put';
