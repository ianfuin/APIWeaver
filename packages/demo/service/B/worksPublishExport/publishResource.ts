export interface OCPWorksPublishModel {
  exportName?: string;
  overWrite?: boolean;
}

export interface Path {
  /**
   * resourceId
   */
  resourceId: string;
}
export type Body = OCPWorksPublishModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/workspublish/export/publish/{resourceId}';
const method = 'post';
