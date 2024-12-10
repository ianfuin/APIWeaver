export interface Query {
  /**
   * boardId
   */
  boardId: string;
  /**
   * boardName
   */
  boardName: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/card/modifyBoardName';
const method = 'put';
