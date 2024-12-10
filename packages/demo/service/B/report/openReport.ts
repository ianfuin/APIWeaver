export interface Query {
  /**
   * menuId
   */
  menuId?: string;
}

export interface Path {
  /**
   * 报表id
   */
  reportId: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/restapi/report/{reportId}';
const method = 'get';
