export interface CallbackResponse {
  errorInfo?: string;
  message?: string;
  success?: boolean;
}

/**
 * OK
 */
export type Response = CallbackResponse;

const path = '/api/v2/organization/config/testOrgMailConfig';
const method = 'post';
