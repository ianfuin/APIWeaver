export interface OrganizationDomainModel {
  domain?: string;
}

/**
 * OK
 */
export type Response = OrganizationDomainModel;

const path = '/api/v2/organization/domain/query';
const method = 'get';
