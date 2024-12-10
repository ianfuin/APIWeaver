export interface AnalysisSaveVO {
  analysisId?: string;
  branchVersion?: string;
  components?: AnalysisComponentVO[];
  cubeShadows?: string;
  description?: string;
  name?: string;
  originAnalysisId?: string;
  owner?: string;
  ownerName?: string;
  pId?: string;
  pageConfig?: object;
  version?: string;
  workspaceId?: string;
}
export interface AnalysisOpenVO {
  analysisId?: string;
  branchVersion?: string;
  components?: AnalysisComponentVO[];
  cubeShadows?: string;
  description?: string;
  name?: string;
  owner?: string;
  ownerName?: string;
  pId?: string;
  pageConfig?: object;
  permissionList?: string[];
  publishStatus?: number;
  themeInfo?: ThemeDO;
  version?: string;
  workspaceId?: string;
}
export interface AnalysisComponentVO {
  componentConfig?: string;
  componentId?: string;
  componentName?: string;
  componentType?: string;
  cubeId?: string;
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

export type Body = AnalysisSaveVO;

/**
 * OK
 */
export type Response = AnalysisOpenVO;

const path = '/api/v2/analysis/save';
const method = 'post';
