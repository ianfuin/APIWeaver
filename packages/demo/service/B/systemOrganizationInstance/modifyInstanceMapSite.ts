export interface InstanceSiteConfigModel {
  organizationId?: string;
  siteName?: string;
}

export type Body = InstanceSiteConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/system/instance/site';
const method = 'post';
