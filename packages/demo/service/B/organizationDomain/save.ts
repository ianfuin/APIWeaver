export interface OrganizationDomainModel {
  domain?: string;
}

export type Body = OrganizationDomainModel;

const path = '/api/v2/organization/domain/save';
const method = 'post';
