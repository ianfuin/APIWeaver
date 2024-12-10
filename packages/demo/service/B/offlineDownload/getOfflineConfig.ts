export interface OfflineConfigDTO {
  rowsLimit?: number;
}

/**
 * OK
 */
export type Response = OfflineConfigDTO;

const path = '/restapi/offlineDownload/getOfflineConfig';
const method = 'get';
