export interface DynamicFileUrlDTO {
  fileUrl?: string;
  validMinutes?: number;
}
export interface Query {
  /**
   * fileId
   */
  fileId: string;
}

/**
 * OK
 */
export type Response = DynamicFileUrlDTO;

const path = '/restapi/offlineDownload/getFileUrl';
const method = 'get';
