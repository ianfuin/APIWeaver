export interface ApiDataSourceTableSyncDTO {
  /**
   * 动态参数列表
   */
  apiDataSourceDyParamDTOList?: ApiDataSourceDyParamDTO[];
  /**
   * apiId
   */
  apiId?: string;
  /**
   * 任务id
   */
  jobId?: string;
}
export interface ApiDataSourceDyParamDTO {
  /**
   * 动态参数示例值，也可以是用户自己选择日期以后的值，这个值必须是yyyy-MM-dd HH:mm:ss格式
   */
  paramExample?: string;
  /**
   * 动态参数公式
   */
  paramExpr?: string;
  /**
   * 用户取的动态参数名
   */
  paramName?: string;
  /**
   * 用户重定义的参数值
   */
  paramValue?: string;
}

export type Body = ApiDataSourceTableSyncDTO;

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/apiDataSource/task/sync';
const method = 'post';
