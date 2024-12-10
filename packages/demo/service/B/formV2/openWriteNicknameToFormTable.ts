export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * formId
   */
  formId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dataForm/openWriteNick';
const method = 'get';
