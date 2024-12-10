export interface PaginatedValEmbedVO {
  data?: EmbedVO[];
  next?: number;
  orderBy?: OrderBy[];
  orderString?: string;
  pageNum?: number;
  pageSize?: number;
  pre?: number;
  start?: number;
  totalNum?: number;
  totalPages?: number;
}
export interface EmbedVO {
  canDelete?: boolean;
  createTime?: string;
  embedTime?: string;
  embedUser?: string;
  embedUserId?: string;
  ownerId?: string;
  ownerName?: string;
  worksId?: string;
  worksName?: string;
  worksType?: string;
  workspaceId?: string;
  workspaceName?: string;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * wsId
   */
  wsId?: string;
  /**
   * worksType
   */
  worksType?: string;
  /**
   * keyword
   */
  keyword?: string;
  /**
   * pageNo
   */
  pageNo?: number;
  /**
   * pageSize
   */
  pageSize?: number;
}

/**
 * OK
 */
export type Response = PaginatedValEmbedVO;

const path = '/api/v2/embed/embededReports';
const method = 'get';
