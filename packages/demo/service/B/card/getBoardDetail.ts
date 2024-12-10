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
export interface Query {
  /**
   * boardId
   */
  boardId: string;
}

/**
 * OK
 */
export type Response = BoardDetailModel;

const path = '/api/v2/card/boardDetail';
const method = 'get';
