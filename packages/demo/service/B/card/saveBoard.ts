export interface BoardDetailModel {
  boardId?: string;
  cards?: CardModel[];
  name?: string;
  pages?: object;
  setting?: string;
}
export interface CardModel {
  cardId?: string;
  components?: CardComponentModel[];
  pageId?: string;
  source?: string;
}

export type Body = BoardDetailModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/card/updateBoardDetail';
const method = 'put';
