export interface Query {
  /**
   * boardId
   */
  boardId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/card/deleteBoard';
const method = 'delete';
