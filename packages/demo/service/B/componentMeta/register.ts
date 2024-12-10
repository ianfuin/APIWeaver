export interface Query {
  /**
   * param
   */
  param: string;
}

export interface Body {
  /**
   * iconFile
   */
  iconFile?: File;
}

const path = '/api/v2/component/register';
const method = 'post';
