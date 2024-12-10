export interface ResourcePackageWorksResultVO {
  directory?: boolean;
  gmtCreate?: string;
  gmtModified?: string;
  path2Root?: KeyValueStringString[];
  resourceId?: string;
  worksCreate?: string;
  worksCreator?: string;
  worksId?: string;
  worksModified?: string;
  worksModifier?: string;
  worksName?: string;
  worksType?: string;
}
export interface KeyValueStringString {
  key?: string;
  value?: string;
}

export interface Path {
  /**
   * resourceId
   */
  resourceId: string;
  /**
   * worksType
   */
  worksType: string;
}

/**
 * OK
 */
export type Response = ResourcePackageWorksResultVO[];

const path = '/api/v2/workspublish/export/listbytype/{resourceId}/{worksType}';
const method = 'get';
