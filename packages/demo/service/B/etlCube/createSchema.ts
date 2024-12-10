export interface EtlCreateCubeModel {
  /**
   * 数据集文件夹id
   */
  aimDirId?: string;
  /**
   * 字段列表
   */
  columns?: CreateColumnModel[];
  /**
   * 数据集名称
   */
  cubeName?: string;
  /**
   * 数据源id
   */
  dsId?: string;
  /**
   * etlId
   */
  etlId?: string;
  /**
   * 工作空间id
   */
  workspaceId?: string;
}
export interface EtlCubeMetaModel {
  /**
   * 字段列表
   */
  columns?: EtlCubeColumnModel[];
  /**
   * 数据集id
   */
  cubeId?: string;
  /**
   * 数据集名称
   */
  cubeName?: string;
  /**
   * 数据源id
   */
  dsId?: string;
  /**
   * 数据源名称
   */
  dsName?: string;
  /**
   * 数据源类型
   */
  dsType?: string;
  /**
   * 物理表名
   */
  tableName?: string;
}
export interface CreateColumnModel {
  /**
   * 字段备注
   */
  columnComment?: string;
  /**
   * 字段名:只允许英文、数字及下划线，不超过128个字符
   */
  columnName?: string;
  /**
   * 对应字段抽象类型
   */
  columnType?: string;
}
export interface EtlCubeColumnModel {
  calculateField?: boolean;
  /**
   * 物理字段名
   */
  columnName?: string;
  /**
   * ETL抽象数据类型
   */
  columnType?: string;
  /**
   * 数据集字段备注
   */
  cubeFieldComment?: string;
  /**
   * 数据集字段名称
   */
  cubeFieldName?: string;
}

export type Body = EtlCreateCubeModel;

/**
 * OK
 */
export type Response = EtlCubeMetaModel;

const path = '/api/v2/etl/cube/createSchema';
const method = 'post';
