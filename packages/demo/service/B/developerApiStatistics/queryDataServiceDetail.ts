export interface Api {
  /**
   * ApiId
   */
  apiId?: number;
  /**
   * 名称
   */
  name?: string;
}

export interface Path {
  /**
   * apiId
   */
  apiId: string;
}

/**
 * OK
 */
export type Response = Api;

const path = '/api/v2/developerApi/{apiId}';
const method = 'get';
