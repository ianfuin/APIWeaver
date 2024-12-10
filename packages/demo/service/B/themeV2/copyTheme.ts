export interface ThemeCopyEvent {
  createUser?: string;
  organizationId?: string;
  themeId?: string;
  themeName?: string;
}
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
export type Body = ThemeCopyEvent;

/**
 * OK
 */
export type Response = ThemeDO;

const path = '/api/v2/themes/{themeId}';
const method = 'post';
