export interface MonitorLogDataModel {
  records?: MonitorDataDetailModel[];
}
export interface MonitorDataDetailModel {
  objectId?: string;
  objectName?: string;
  operateTime?: string;
  pageId?: string;
  scope?: string;
  time?: string;
  type?: string;
  url?: string;
  visitId?: string;
  visitorId?: string;
  visitorName?: string;
}

export type Body = MonitorLogDataModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/monitordata/bulkSave';
const method = 'post';
