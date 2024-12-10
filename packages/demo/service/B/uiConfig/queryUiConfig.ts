export interface UiConfigModel {
  blockGif?: string;
  favicon?: string;
  logo?: string;
  logoHeight?: number;
  pageGif?: string;
  systemName?: string;
}

/**
 * OK
 */
export type Response = UiConfigModel;

const path = '/api/v2/organization/uiconfig/query';
const method = 'get';
