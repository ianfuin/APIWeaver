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
export interface Query {
  /**
   * cubeId
   */
  cubeId: string;
  /**
   * rebuild
   */
  rebuild?: boolean;
  /**
   * polling
   */
  polling?: boolean;
}

/**
 * OK
 */
export type Response = SmartRobotTableConfigModel;

const path = '/api/v2/smart/robot/table/auto';
const method = 'post';
