export interface BoardModel {
  boardId?: string;
  boardName?: string;
}

export type Body = BoardModel;

/**
 * OK
 */
export type Response = BoardModel;

const path = '/api/v2/card/newBoard';
const method = 'post';
