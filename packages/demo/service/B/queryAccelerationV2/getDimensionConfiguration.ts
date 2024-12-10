export interface CubeDimensionAccelerationModel {
  /**
   * 是否开启 维值预计算
   */
  cubeDimensionOpen?: boolean;
  /**
   * 数据集-维值映射关系对
   */
  mappings?: CubeDimensionMappingModel[];
}
export interface CubeDimensionMappingModel {
  /**
   * 维表字段名
   */
  columnName?: string;
  /**
   * 维度字段id
   */
  dimensionAttributeId?: string;
  /**
   * 维表表名
   */
  tableName?: string;
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
export type Response = CubeDimensionAccelerationModel;

const path = '/api/v2/acceleration/cube/{cubeId}/getDimensionConfiguration';
const method = 'get';
