export interface MonitorQueryEvent {
  componentId?: string;
  dataStatus?: number;
  desc?: number;
  keyword?: string;
  monitorPeriod?: string;
  msgSwitch?: number;
  orderBy?: string;
  ownerId?: string;
  worksId?: string;
  worksType?: string;
  workspaceId?: string;
}

export type Body = MonitorQueryEvent;

/**
 * OK
 */
export type Response = string[];

const path = '/api/v2/monitor/metric/hasAuthed';
const method = 'post';
