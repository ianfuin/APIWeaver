export interface TemplateCountVO {
  resourceTypeCount?: object;
  statusCount?: object;
}
export interface Query {
  /**
   * demoCenter
   */
  demoCenter?: number;
  /**
   * demoMobileCenter
   */
  demoMobileCenter?: number;
  /**
   * resourceType
   */
  resourceType?: string;
  /**
   * isOwner
   */
  isOwner?: boolean;
  /**
   * isSuper
   */
  isSuper?: boolean;
}

/**
 * OK
 */
export type Response = TemplateCountVO;

const path = '/api/v2/template/countTemplate';
const method = 'get';
