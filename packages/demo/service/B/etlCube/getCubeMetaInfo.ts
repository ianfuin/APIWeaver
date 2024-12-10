export interface EtlUpdateCubeModel {
  /**
   * 数据集id
   */
  cubeId?: string;
  /**
   * 数据集目录id
   */
  newPid?: string;
  /**
   * 数据集显示名称
   */
  newShowName?: string;
}

export type Body = EtlUpdateCubeModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/etl/cube/updateProperties';
const method = 'put';
�理表名
   */
  tableName?: string;
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
export interface Query {
  /**
   * cubeId
   */
  cubeId: string;
}

/**
 * OK
 */
export type Response = EtlCubeMetaModel;

const path = '/api/v2/etl/cube/metaInfo';
const method = 'get';
