export interface BoardModel {
  boardId?: string;
  boardName?: string;
}

/**
 * OK
 */
export type Response = BoardModel[];

const path = '/api/v2/card/listBoards';
const method = 'get';
