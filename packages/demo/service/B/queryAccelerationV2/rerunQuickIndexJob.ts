export interface CubeAccelerationJobIdModel {
  jobHistoryId?: string;
  jobId?: string;
  lastJobHistoryId?: string;
}

export interface Path {
  /**
   * cubeId
   */
  cubeId: string;
}
export type Body = CubeAccelerationJobIdModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/acceleration/cube/{cubeId}/rerunQuickIndexJob';
const method = 'put';
