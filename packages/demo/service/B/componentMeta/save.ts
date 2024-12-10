export interface Query {
  /**
   * param
   */
  param: string;
}

export interface Path {
  /**
   * componentId
   */
  componentId: string;
}

export interface Body {
  /**
   * jsZipFile
   */
  jsZipFile?: File;
  /**
   * iconFile
   */
  iconFile?: File;
}

const path = '/api/v2/component/{componentId}';
const method = 'post';
