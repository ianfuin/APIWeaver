export interface MobileConfigModel {
  config?: string;
}

/**
 * OK
 */
export type Response = MobileConfigModel;

const path = '/api/v2/mobileconfig/get';
const method = 'get';
