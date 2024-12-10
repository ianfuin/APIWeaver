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
   * keyword
   */
  keyword?: string;
  /**
   * catalogId
   */
  catalogId?: string;
  /**
   * searchType
   */
  searchType?: number;
  /**
   * pageNo
   */
  pageNo?: number;
  /**
   * pageSize
   */
  pageSize?: number;
}

/**
 * OK
 */
export type Response = WorksDTO[];

const path = '/api/v2/catalogs/search';
const method = 'get';
