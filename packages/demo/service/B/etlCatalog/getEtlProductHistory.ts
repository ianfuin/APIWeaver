export interface EtlProductMetaInfoModel {
  etlId?: string;
  etlName?: string;
  etlPublishStatus?: number;
  etlSchedulePaused?: boolean;
  gmtCreate?: string;
  gmtModified?: string;
  lastScheduleStatus?: number;
  path2Root?: KeyValueStringString[];
  productId?: string;
  productName?: string;
  productStatus?: number;
  productType?: string;
}
export interface KeyValueStringString {
  key?: string;
  value?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * etlId
   */
  etlId: string;
}

/**
 * OK
 */
export type Response = EtlProductMetaInfoModel[];

const path = '/api/v2/etl/getEtlProductHistory';
const method = 'get';
