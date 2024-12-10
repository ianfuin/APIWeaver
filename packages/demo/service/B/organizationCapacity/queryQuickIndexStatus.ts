export interface QuickIndexStatusModel {
  /**
   * 开启探索空间
   */
  openMixRepository?: boolean;
  /**
   * 开启抽取加速
   */
  openOfflineAcceleration?: boolean;
}

/**
 * OK
 */
export type Response = QuickIndexStatusModel;

const path = '/api/v2/organization/quickindex/manager/queryQuickIndexStatus';
const method = 'get';
