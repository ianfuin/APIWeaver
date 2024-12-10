export interface FavoriteSelectedDirectoryModel {
  catalogIds?: string[];
  workType?: string;
  workspaceId?: string;
}
export interface FavoriteSelectedProductionDO {
  productionId?: string;
  productionName?: string;
}

export type Body = FavoriteSelectedDirectoryModel;

/**
 * OK
 */
export type Response = FavoriteSelectedProductionDO[];

const path = '/api/v2/favorite/getProduction';
const method = 'post';
