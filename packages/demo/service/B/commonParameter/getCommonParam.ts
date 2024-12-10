export interface Path {
  /**
   * 分组
   */
  group: string;
  /**
   * 参数
   */
  param: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/restapi/commonparam/group/{group}/param/{param}';
const method = 'get';
