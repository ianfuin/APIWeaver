export interface ThemeDetailResult {
  setting?: string;
  themeDO?: ThemeDO;
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
export interface Query {
  /**
   * dashboardId
   */
  dashboardId: string;
  /**
   * menuId
   */
  menuId?: string;
  /**
   * viewType
   */
  viewType?: string;
}

/**
 * OK
 */
export type Response = ThemeDetailResult;

const path = '/api/v2/themes/dashboard';
const method = 'get';
