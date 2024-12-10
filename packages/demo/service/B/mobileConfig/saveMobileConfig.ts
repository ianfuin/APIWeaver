export interface MobileConfigModel {
  config?: string;
}

export type Body = MobileConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/mobileconfig/save';
const method = 'post';
