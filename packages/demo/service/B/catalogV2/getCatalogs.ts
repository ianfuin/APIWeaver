export interface PaginatedValCatalogDTO {
  data?: CatalogDTO[];
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
export interface CatalogDTO {
  catalogId?: string;
  catalogName?: string;
  dashboardNum?: number;
  formNum?: number;
  gmtCreate?: string;
  gmtModified?: string;
  portalNum?: number;
  reportNum?: number;
  screenNum?: number;
  worksNum?: number;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * 报表关键字，搜索时需要
   */
  keyword?: string;
  /**
   * 搜索类型，搜索时需要
   */
  searchType?: number;
  /**
   * 类目关键字，搜索时需要
   */
  catalogKeyword?: string;
  /**
   * pageSize
   */
  pageSize?: number;
  /**
   * pageNum
   */
  pageNum?: number;
  /**
   * 是否来自访问者
   */
  fromVisitor?: boolean;
  /**
   * 是否排除其他的分类加入『全部』的统计
   */
  excludeOther?: boolean;
}

/**
 * OK
 */
export type Response = PaginatedValCatalogDTO;

const path = '/api/v2/catalogs';
const method = 'get';
