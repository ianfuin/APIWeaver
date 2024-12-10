export interface Query {
  /**
   * apiId
   */
  apiId: number;
  /**
   * isOpen
   */
  isOpen: boolean;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/developerApi/switchApiStatus';
const method = 'post';
