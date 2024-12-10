export interface FavoriteBatchSaveForUserModel {
  mobileDefaultId?: string;
  productionIds?: string[];
  userId?: string;
}

export type Body = FavoriteBatchSaveForUserModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/favorite/batchSaveForUser';
const method = 'post';
