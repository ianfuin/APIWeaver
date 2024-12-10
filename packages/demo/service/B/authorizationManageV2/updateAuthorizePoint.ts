export interface UpdateAuthorityModel {
  authPoints?: number;
  expireDay?: string;
}

export interface Path {
  /**
   * authId
   */
  authId: string;
}
export type Body = UpdateAuthorityModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/authorize/{authId}';
const method = 'put';
