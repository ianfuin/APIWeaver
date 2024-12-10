export interface MenuItem {
  children?: MenuItem[];
  id?: string;
  name?: string;
  projectId?: string;
  reportType?: string;
  type?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * type
   */
  type: string;
  /**
   * keyword
   */
  keyword?: string;
}

/**
 * OK
 */
export type Response = MenuItem[];

const path = '/api/v2/dataportal/menuitems';
const method = 'get';
