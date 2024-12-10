export interface CorpConfigUnbindingModel {
  corpId?: string;
  mobileType?: string;
  platformCode?: number;
}

export type Body = CorpConfigUnbindingModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/mobile/setting/unbinding';
const method = 'delete';
