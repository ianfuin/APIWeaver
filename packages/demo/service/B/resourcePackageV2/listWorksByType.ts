export interface Path {
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * workstype
   */
  workstype: string;
}

/**
 * OK
 */
export type Response = object[];

const path =
  '/api/v2/resourcepackage/export/listworks/{workstype}/{workspaceId}';
const method = 'get';
