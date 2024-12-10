export interface ApiDataSourceConfigModelDTO {
  /**
   * 数据源id
   */
  apiId?: string;
  /**
   * 认证方式配置
   */
  authConfig?: ApiDataSourceAuthConfigModel;
  /**
   * 请求体
   */
  body?: string;
  /**
   * 列配置
   */
  columnsConfig?: JsonTreeModel[];
  /**
   * 创建者id
   */
  creatorId?: string;
  /**
   * cron表达式
   */
  cronExpression?: string;
  /**
   * 自定义headers
   */
  customerHeaders?: ApiDataSourceParamDTO[];
  /**
   * 创建时间
   */
  gmtCreate?: string;
  /**
   * 更新时间
   */
  gmtModified?: string;
  id?: number;
  /**
   * 请求方法
   */
  method?: string;
  /**
   * 请求参数
   */
  parameters?: ApiDataSourceParamDTO[];
  /**
   * 更新方式
   */
  refreshType?: string;
  /**
   * 表id
   */
  repositoryId?: string;
  /**
   * 展示名
   */
  showName?: string;
  /**
   * 请求地址
   */
  url?: string;
}
export interface ApiDataSourceAuthConfigModel {
  /**
   * 认证配置
   */
  config?: object;
  /**
   * 认证方式,NONE-无,BASIC-基础认证,DIGEST-摘要认证
   */
  type?: string;
}
export interface JsonTreeModel {
  /**
   * 子节点
   */
  children?: JsonTreeModel[];
  /**
   * 字段是否启用，false为启用
   */
  disabled?: boolean;
  /**
   * 字段路径path，前端需要名称为key
   */
  key?: string;
  /**
   * 字段原名称
   */
  originName?: string;
  /**
   * 字段名称
   */
  title?: string;
  /**
   * 字段类型，[number,string,datetime]
   */
  type?: string;
  /**
   * 字段值，初始化默认全部为字符
   */
  value?: string;
}
export interface ApiDataSourceParamDTO {
  name?: string;
  value?: string;
}
export interface Query {
  /**
   * apiId
   */
  apiId?: string;
  /**
   * workspaceId
   */
  workspaceId: string;
}

export type Body = ApiDataSourceConfigModelDTO;

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/apiDataSource/table/detect';
const method = 'post';
