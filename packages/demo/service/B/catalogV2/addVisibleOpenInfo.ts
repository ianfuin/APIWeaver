export interface Query {
  /**
   * isOpen
   */
  isOpen: number;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/catalogs/visible/switch';
const method = 'put';
