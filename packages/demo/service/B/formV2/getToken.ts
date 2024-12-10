export interface AccessTokenVo {
  accessToken?: string;
  invalidTime?: string;
  registerTime?: string;
  tokeType?: number;
  validTime?: number;
}
export interface Query {
  /**
   * formId
   */
  formId: string;
}

/**
 * OK
 */
export type Response = AccessTokenVo;

const path = '/api/v2/dataForm/viewToken';
const method = 'get';
