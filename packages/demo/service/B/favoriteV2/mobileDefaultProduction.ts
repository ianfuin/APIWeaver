export interface FavoriteBO {
  applying?: boolean;
  createTime?: string;
  favoriteId?: number;
  hasAuth?: boolean;
  mobileDefault?: boolean;
  ownerNum?: string;
  productionId?: string;
  productionName?: string;
  productionType?: string;
  updateTime?: string;
}

/**
 * OK
 */
export type Response = FavoriteBO;

const path = '/api/v2/favorite/mobileDefaultProduction';
const method = 'get';
