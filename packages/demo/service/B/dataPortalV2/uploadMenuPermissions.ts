export interface Path {
  /**
   * dataPortalId
   */
  dataPortalId: string;
}

export interface Body {
  /**
   * file
   */
  file?: File;
}

const path = '/api/v2/dataportal/{dataPortalId}/uploadMenusPermissions';
const method = 'post';
