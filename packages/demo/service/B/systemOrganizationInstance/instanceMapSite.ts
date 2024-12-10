export interface InstanceSiteConfigModel {
  organizationId?: string;
  siteName?: string;
}
export interface Query {
  /**
   * organizationId
   */
  organizationId: string;
}

/**
 * OK
 */
export type Response = InstanceSiteConfigModel;

const path = '/api/v2/system/instance/site';
const method = 'get';
