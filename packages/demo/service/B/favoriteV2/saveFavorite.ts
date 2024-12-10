export interface Query {
  /**
   * productType
   */
  productType?: string;
}

export interface Path {
  /**
   * productionId
   */
  productionId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/favorite/{productionId}';
const method = 'post';
