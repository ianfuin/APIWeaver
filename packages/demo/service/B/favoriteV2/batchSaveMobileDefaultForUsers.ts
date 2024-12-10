export interface FavoriteBatchSaveForUsersModel {
  mobileDefaultId?: string;
  productionIds?: string[];
  userIds?: string[];
  usergroupIds?: string[];
}

export type Body = FavoriteBatchSaveForUsersModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/favorite/batchSaveMobileDefaultForUsers';
const method = 'post';
