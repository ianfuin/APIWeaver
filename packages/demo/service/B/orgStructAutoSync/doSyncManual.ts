export interface OrgStructAutoSyncReqModel {
  cancelSync?: boolean;
  cronEx?: string;
  downstreamCorpId?: string;
  mobileType?: string;
  syncDeptIds?: string[];
}

export type Body = OrgStructAutoSyncReqModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/orgStructAutoSync/doSync';
const method = 'post';
