export interface CardCollectModel {
  boardId?: string;
  cards?: CardModel[];
}
export interface CardModel {
  cardId?: string;
  components?: CardComponentModel[];
  pageId?: string;
  source?: string;
}

export type Body = CardCollectModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/card/collectCards';
const method = 'post';
