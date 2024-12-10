export interface FavoriteSequenceModel {
  sequence?: string[];
  topNum?: number;
}

export type Body = FavoriteSequenceModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/favorite/batchCancel';
const method = 'post';
