export interface PaginatedValCatalogWorkDTO {
  data?: CatalogWorkDTO[];
  next?: number;
  orderBy?: OrderBy[];
  orderString?: string;
  pageNum?: number;
  pageSize?: number;
  pre?: number;
  start?: number;
  totalNum?: number;
  totalPages?: number;
}
export interface CatalogWorkDTO {
  catalogId?: string;
  catalogName?: string;
  creatorNick?: string;
  favorite?: boolean;
  gmtCreate?: string;
  gmtModified?: string;
  gmtTop?: string;
  hasAuth?: boolean;
  ownerName?: string;
  top?: boolean;
  workId?: string;
  workName?: string;
  workType?: string;
  workspaceId?: string;
  workspaceName?: string;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * 关键字，搜索时需要
   */
  keyword?: string;
  /**
   * searchType
   */
  searchType?: number;
  /**
   * pageSize
   */
  pageSize?: number;
  /**
   * pageNum
   */
  pageNum?: number;
  /**
   * fromVisitor
   */
  fromVisitor?: boolean;
  /**
   * treeType
   */
  treeType?: string;
}

export interface Path {
  /**
   * catalogId
   */
  catalogId?: string;
}

/**
 * OK
 */
export type Response = PaginatedValCatalogWorkDTO;

const path = '/api/v2/catalogs/{catalogId}/works';
const method = 'get';
