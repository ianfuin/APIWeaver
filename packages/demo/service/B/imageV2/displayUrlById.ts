export interface Query {
  /**
   * menuId
   */
  menuId?: string;
}

export interface Path {
  /**
   * fileId
   */
  fileId: string;
}

const path = '/api/v2/image/display/{fileId}';
const method = 'get';
