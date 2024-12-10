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

export type Body = QuickIndexStatusModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/quickindex/manager/modifyQuickIndexStatus';
const method = 'put';
