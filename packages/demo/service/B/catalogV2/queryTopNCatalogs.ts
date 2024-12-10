export interface CatalogViewDTO {
  catalogId?: string;
  catalogName?: string;
  count?: number;
  selfView?: number;
  totalView?: number;
  works?: WorksDTO[];
}
export interface WorksDTO {
  catalogId?: string;
  catalogName?: string;
  favorited?: boolean;
  gmtCreate?: string;
  gmtModified?: string;
  latestViewTime?: string;
  ownerId?: string;
  ownerName?: string;
  subType?: number;
  totalViewCount?: number;
  viewCount?: number;
  workId?: string;
  workName?: string;
  worksType?: string;
  wsId?: string;
  wsName?: string;
}
export interface Query {
  /**
   * topN
   */
  topN?: number;
  /**
   * worksTopN
   */
  worksTopN?: number;
  /**
   * interval
   */
  interval?: number;
}

/**
 * OK
 */
export type Response = CatalogViewDTO[];

const path = '/api/v2/catalogs/tops';
const method = 'get';
