export interface UiConfigModel {
  blockGif?: string;
  favicon?: string;
  logo?: string;
  logoHeight?: number;
  pageGif?: string;
  systemName?: string;
}

export type Body = UiConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/uiconfig/save';
const method = 'post';
