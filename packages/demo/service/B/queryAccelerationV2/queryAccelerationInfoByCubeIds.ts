export interface CubeAccelerationStatusModel {
  /**
   * 数据集id
   */
  cubeId?: string;
  /**
   * 数据源类型
   */
  dsType?: string;
  /**
   * 是否开启数据集缓存
   */
  openCache?: boolean;
  /**
   * 是否开启维值加速
   */
  openDimension?: boolean;
  /**
   * 是否开启Quick引擎
   */
  openQuickIndex?: boolean;
}

export type Body = string[];

/**
 * OK
 */
export type Response = CubeAccelerationStatusModel[];

const path = '/api/v2/acceleration/queryAccelerationInfoByCubeIds';
const method = 'post';
