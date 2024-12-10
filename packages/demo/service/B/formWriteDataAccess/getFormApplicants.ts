export interface UserDTO {
  nickName?: string;
  userId?: string;
}
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
export type Response = UserDTO[];

const path = '/api/v2/formData/getApplicants';
const method = 'get';
