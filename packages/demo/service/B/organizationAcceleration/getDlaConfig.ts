export interface OrgDlaConfigModel {
  address?: string;
  clusterCu?: string;
  clusterName?: string;
  clusterOrigin?: number;
  password?: string;
  port?: string;
  region?: string;
  username?: string;
}

/**
 * OK
 */
export type Response = OrgDlaConfigModel;

const path = '/api/v2/organization/acceleration/dla';
const method = 'get';
