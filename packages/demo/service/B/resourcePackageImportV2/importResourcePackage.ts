export interface Query {
  /**
   * 提取码
   */
  accesscode: string;
  /**
   * 导入策略
   */
  importstratage: string;
  /**
   * 目标空间
   */
  targetworkspaceId: string;
  /**
   * 资源归属人
   */
  targetuserId: string;
}

export interface Body {
  /**
   * 资源包文件
   */
  file?: File;
}

const path = '/api/v2/resourcepackage/import';
const method = 'post';
