export interface ThemeDO {
  createTime?: string;
  createUserId?: string;
  createUserName?: string;
  id?: number;
  imageFileList?: string[];
  isDeleted?: number;
  mobileThumbnail?: string;
  modifyTime?: string;
  modifyUserId?: string;
  modifyUserName?: string;
  organizationId?: string;
  themeConfig?: string;
  themeIcon?: string;
  themeId?: string;
  themeName?: string;
  themeType?: string;
  thumbnail?: string;
  usageCount?: number;
}

export interface Path {
  /**
   * themeId
   */
  themeId: string;
}

/**
 * OK
 */
export type Response = ThemeDO;

const path = '/api/v2/themes/thumbnail/{themeId}';
const method = 'get';