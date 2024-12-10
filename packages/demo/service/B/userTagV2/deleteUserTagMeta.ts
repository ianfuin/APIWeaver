export interface Query {
  /**
   * tagId
   */
  tagId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/usertag/meta/single';
const method = 'delete';
