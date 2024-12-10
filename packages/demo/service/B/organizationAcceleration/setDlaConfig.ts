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

export type Body = OrgDlaConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/acceleration/dla';
const method = 'put';
