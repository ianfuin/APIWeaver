export interface Query {
  /**
   * catalogId
   */
  catalogId?: string;
  /**
   * keyword
   */
  keyword?: string;
  /**
   * ownerId
   */
  ownerId?: string;
  /**
   * publishStatus
   */
  publishStatus?: any[];
  /**
   * createStartFrom
   */
  createStartFrom?: number;
  /**
   * createEndTo
   */
  createEndTo?: number;
  /**
   * resourceId
   */
  resourceId?: string;
  /**
   * workspaceId
   */
  workspaceId?: string;
  /**
   * triggerType
   */
  triggerType?: number;
  /**
   * paused
   */
  paused?: boolean;
  /**
   * scheduleStatus
   */
  scheduleStatus?: number;
  /**
   * forExport
   */
  forExport?: boolean;
  /**
   * needShowAllWithoutTree
   */
  needShowAllWithoutTree?: boolean;
  /**
   * needParseCubeSchema
   */
  needParseCubeSchema?: boolean;
  /**
   * showQuickIndex
   */
  showQuickIndex?: boolean;
}

export interface Path {
  /**
   * type
   */
  type: string;
}

/**
 * OK
 */
export type Response = object[];

const path = '/api/v2/catalog/{type}/get';
const method = 'get';
