export interface Query {
  /**
   * fileId
   */
  fileId: string;
  /**
   * signature
   */
  signature: string;
}

const path = '/api/v2/file/download/byFileId';
const method = 'get';
