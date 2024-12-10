export interface Query {
  /**
   * homePageType
   */
  homePageType: number;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/preference/update';
const method = 'put';
