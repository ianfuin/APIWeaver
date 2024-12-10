export interface Query {
  /**
   * wsId
   */
  wsId: string;
  /**
   * worksId
   */
  worksId: string;
  /**
   * count
   */
  count?: number;
  /**
   * sql
   */
  sql?: string;
  /**
   * ossUrl
   */
  ossUrl?: string;
}

export interface Path {
  /**
   * type
   */
  type: string;
}

const path = '/api/v2/auditlog/{type}/export';
const method = 'post';
