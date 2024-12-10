export interface CubeTableModel {
  caption?: string;
  datasourceId?: string;
  dsType?: string;
  factTable?: boolean;
  fromPanel?: boolean;
  tableName?: string;
  uniqueId?: string;
}
export interface JoinKeysResult {
  data?: JoinKeyModel[];
  success?: boolean;
}
export interface JoinKeyModel {
  condition?: string;
  sourceCalculateMember?: boolean;
  sourceKey?: string;
  sourceType?: string;
  targetCalculateMember?: boolean;
  targetKey?: string;
  targetType?: string;
}

export type Body = CubeTableModel[];

/**
 * OK
 */
export type Response = JoinKeysResult;

const path = '/api/v2/dataset/getTableAssociation';
const method = 'post';
