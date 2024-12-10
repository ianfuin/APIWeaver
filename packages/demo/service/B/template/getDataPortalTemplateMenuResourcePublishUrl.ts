export interface Query {
  /**
   * dataPortalTemplateId
   */
  dataPortalTemplateId: string;
  /**
   * dataPortalMenuId
   */
  dataPortalMenuId: string;
}

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/template/dataPortal/menu/url';
const method = 'get';
