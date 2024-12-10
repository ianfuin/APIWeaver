export interface FavoriteManageModel {
  mobileDefaultId?: string;
  sequence?: string[];
  userId?: string;
}

export type Body = FavoriteManageModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/favorite/manageByUserId';
const method = 'post';
