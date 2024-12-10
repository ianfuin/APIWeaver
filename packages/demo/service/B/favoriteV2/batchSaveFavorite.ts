export interface FavoriteBatchSaveModel {
  productionIds?: string[];
  userId?: string;
}

export type Body = FavoriteBatchSaveModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/favorite/batchSave';
const method = 'post';
