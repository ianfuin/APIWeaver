export interface ApiDataSourceTaskLogQueryDTO {
  /**
   * 结束时间
   */
  endDate?: string;
  /**
   * 任务id
   */
  jobId?: string;
  /**
   * 分页页数
   */
  pageNum?: number;
  /**
   * 每页大小
   */
  pageSize?: number;
  /**
   * 开始时间
   */
  startDate?: string;
}
export interface PagingResultModelApiDataSourceTaskLogDTO {
  data?: ApiDataSourceTaskLogDTO[];
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
}
export interface ApiDataSourceTaskLogDTO {
  /**
   * 任务执行时间
   */
  duration?: number;
  /**
   * 任务历史id
   */
  jobHistoryId?: string;
  /**
   * 一个API配置对应一个
   */
  jobId?: string;
  /**
   * 任务开始时间
   */
  jobStartDate?: string;
  /**
   * 任务状态,0-待运行,1-运行中,2-成功,3-失败
   */
  jobStatus?: number;
  /**
   * 任务日志
   */
  log?: string;
}

export type Body = ApiDataSourceTaskLogQueryDTO;

/**
 * OK
 */
export type Response = PagingResultModelApiDataSourceTaskLogDTO;

const path = '/api/v2/apiDataSource/task/queryOfflineSyncLog';
const method = 'post';
