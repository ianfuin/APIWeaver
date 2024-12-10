export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * status
   */
  status?: string;
  /**
   * keyword
   */
  keyword?: string;
  /**
   * ownerId
   */
  ownerId?: string;
  /**
   * createStartFrom
   */
  createStartFrom?: number;
  /**
   * createEndTo
   */
  createEndTo?: number;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/restapi/offlineDownload/getListByWorkspace';
const method = 'get';
