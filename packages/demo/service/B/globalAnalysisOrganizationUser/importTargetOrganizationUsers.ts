export interface ImportOrganizationUserEvent {
  importOrganizationId?: string;
  importUsers?: string[];
  userId?: string;
  userSourceOrganizationId?: string;
}

export type Body = ImportOrganizationUserEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/globalAnalysis/importUsers';
const method = 'post';
