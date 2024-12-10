export interface ChannelOperationRelation {
  channelId?: string;
  extraInfo?: ChannelOriginExtraInfoModel;
  gmtCreate?: string;
  operationId?: string;
  operationName?: string;
  operationType?: number;
}
export interface ChannelOriginExtraInfoModel {
  ownerId?: string;
  ownerName?: string;
  worksId?: string;
  worksName?: string;
  worksType?: string;
}
export interface Query {
  /**
   * channelId
   */
  channelId: string;
}

/**
 * OK
 */
export type Response = ChannelOperationRelation[];

const path = '/api/v2/channel/list/relation';
const method = 'get';
meters?: ChannelParameterModel[];
  status?: number;
  system?: boolean;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * channelType
   */
  channelType?: string;
  /**
   * keyword
   */
  keyword?: string;
}

/**
 * OK
 */
export type Response = PaginatedValChannelDetail;

const path = '/api/v2/channel/list';
const method = 'get';
