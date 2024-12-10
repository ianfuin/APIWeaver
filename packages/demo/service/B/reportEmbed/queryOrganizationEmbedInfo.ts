export interface OrganizationEmbedInfoVO {
  embedDetail?: object;
  licenseMaxUvCount?: number;
  maxEmbedCount?: number;
  organizationId?: string;
  systemCurrentUsedUvCount?: number;
}

/**
 * OK
 */
export type Response = OrganizationEmbedInfoVO;

const path = '/api/v2/embed/info';
const method = 'get';
