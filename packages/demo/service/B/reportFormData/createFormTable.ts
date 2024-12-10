export interface CreateTableModel {
  /**
   * 表字段
   */
  columns?: EtlColumnModel[];
  /**
   * 数据源id
   */
  dsId?: string;
  /**
   * 生命周期:ODPS,ADB
   */
  lifecycle?: number;
  /**
   * 分区字段名
   */
  partitions?: string[];
  /**
   * 主键字段名
   */
  primaryKeys?: string[];
  /**
   * 是否双副本:clickhouse
   */
  replicated?: boolean;
  /**
   * 表名:只允许英文、数字及下划线，不超过128个字符
   */
  tableName?: string;
}
export interface EtlColumnModel {
  /**
   * 字段备注
   */
  columnComment?: string;
  /**
   * 字段名:只允许英文、数字及下划线，不超过128个字符
   */
  columnName?: string;
  /**
   * 数据源对应字段原始类型
   */
  columnType?: string;
  /**
   * 字段长度
   */
  max?: number;
}

export type Body = CreateTableModel;

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/reportForm/create/table';
const method = 'post';
