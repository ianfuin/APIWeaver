export interface CatalogReportQueryResult {
  catalogInfo?: CatalogModel;
  reports?: ReportPagingQueryResultModelReportQueryResultModel;
}
export interface CatalogModel {
  catalogId?: string;
  catalogName?: string;
}
export interface ReportPagingQueryResultModelReportQueryResultModel {
  data?: ReportQueryResultModel[];
  next?: number;
  pageNum?: number;
  pageSize?: number;
  pre?: number;
  reportCountResult?: ReportCountResultModel[];
  totalNum?: number;
  totalPages?: number;
}
export interface Query {
  /**
   * keyword
   */
  keyword?: string;
  /**
   * treeType
   */
  treeType?: string;
  /**
   * 关键字查询类型 => 0: 根据作品名称和昵称查找 1: 根据作品名称查找 2: 根据昵称查找
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
  /**
   * 不传时:用户可见的类目 + all + other(all, other 是否加载见参数: containAllType, containOtherType)
   */
  catalogIds?: any[];
  /**
   * 不传catalogIds时:是否包含all类目
   */
  containAllType?: boolean;
  /**
   * 不传catalogIds时:是否包含other类目
   */
  containOtherType?: boolean;
}

/**
 * OK
 */
export type Response = CatalogReportQueryResult[];

const path = '/api/v2/catalogs/catalogsReportPagingList';
const method = 'get';
