export interface PaginatedValApiTableModel {
  data?: ApiTableModel[];
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
}
/**
 * API数据源列表
 */
export interface ApiTableModel {
  /**
   * api数据源id
   */
  apiId?: string;
  /**
   * 请求体
   */
  body?: string;
  /**
   * 创建者id
   */
  creatorId?: string;
  /**
   * 数据量
   */
  dataSize?: number;
  /**
   * 数据源id
   */
  datasourceId?: string;
  /**
   * 表数据更新时间
   */
  dateUpdateTime?: string;
  /**
   * 配置创建时间
   */
  gmtCreate?: string;
  /**
   * 配置更新时间
   */
  gmtModified?: string;
  /**
   * 任务id
   */
  jobId?: string;
  /**
   * 查询参数
   */
  parameters?: string;
  /**
   * 表显示名称
   */
  showName?: string;
  /**
   * 任务状态,0-待运行,1-运行中,2-成功,3-失败
   */
  statusType?: number;
  /**
   * 表名称
   */
  tableName?: string;
}
export interface Query {
  /**
   * 工作空间id
   */
  workspaceId?: string;
  /**
   * keyword
   */
  keyword?: string;
  /**
   * pageNum
   */
  pageNum?: number;
  /**
   * pageSize
   */
  pageSize?: number;
}

/**
 * OK
 */
export type Response = PaginatedValApiTableModel;

const path = '/api/v2/apiDataSource/table/list';
const method = 'get';
