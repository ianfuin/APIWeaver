export interface CubePerformanceSimpleModel {
  /**
   * 平均查询耗时
   */
  costTimeAvg?: number;
  /**
   * 数据源类型
   */
  dsType?: string;
  /**
   * 重复查询占比
   */
  repeatQueryPercent?: string;
  /**
   * 优化建议
   */
  suggestionType?: string;
}

export interface Path {
  /**
   * cubeId
   */
  cubeId: string;
}

/**
 * OK
 */
export type Response = CubePerformanceSimpleModel;

const path = '/api/v2/performance/cube/{cubeId}/getSimpleInfo';
const method = 'get';
