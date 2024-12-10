export interface Path {
  /**
   * codeId
   */
  codeId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/identifyCode/{codeId}';
const method = 'delete';
