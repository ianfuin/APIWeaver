export interface Query {
  /**
   * 提取码
   */
  accesscode: string;
  /**
   * 是否带权限导入，默认带
   */
  withAuthorInfo?: boolean;
}

export interface Body {
  /**
   * 移植包文件
   */
  file?: File;
}

const path = '/api/v2/workspublish/import';
const method = 'post';
