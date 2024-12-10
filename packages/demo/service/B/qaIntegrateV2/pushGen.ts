export interface QaIntegratePushGenParam {
  audienceName?: string;
  encryptType?: string;
  field?: string;
  mappingType?: string;
  olapQueryParam?: string;
  organizationId?: string;
  userId?: string;
  workspaceId?: string;
}

export type Body = QaIntegratePushGenParam;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/qaIntegration/audience/pushGen';
const method = 'post';
