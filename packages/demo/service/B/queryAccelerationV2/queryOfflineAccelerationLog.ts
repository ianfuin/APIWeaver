export interface PaginatedValCubeOfflineAccelerationLogModel {
  data?: CubeOfflineAccelerationLogModel[];
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
export interface CubeOfflineAccelerationLogModel {
  /**
   * 耗时
   */
  duration?: string;
  /**
   * 任务历史id
   */
  jobHistoryId?: string;
  /**
   * 加速任务id
   */
  jobId?: string;
  /**
   * 状态,0-待运行，1-运行中，2-正常结束，3-异常结束，4-取消，5-警告
   */
  jobStatus?: number;
  /**
   * 任务开始时间
   */
  jonStartDate?: string;
  /**
   * 日志
   */
  log?: string;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * 加速任务id
   */
  jobId?: string;
  /**
   * startDate
   */
  startDate: string;
  /**
   * endDate
   */
  endDate: string;
  /**
   * pageNo
   */
  pageNo: number;
  /**
   * pageSize
   */
  pageSize: number;
}

/**
 * OK
 */
export type Response = PaginatedValCubeOfflineAccelerationLogModel;

const path = '/api/v2/acceleration/cube/queryOfflineAccelerationLog';
const method = 'get';
