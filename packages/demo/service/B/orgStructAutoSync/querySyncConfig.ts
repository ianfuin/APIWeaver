export interface AutoSyncConfigModel {
  corpId?: string;
  cronEx?: string;
  platform?: number;
  syncDeptIds?: string[];
}

export interface Path {
  /**
   * mobileType
   */
  mobileType: string;
}

/**
 * OK
 */
export type Response = AutoSyncConfigModel;

const path = '/api/v2/orgStructAutoSync/queryConfig/{mobileType}';
const method = 'get';
