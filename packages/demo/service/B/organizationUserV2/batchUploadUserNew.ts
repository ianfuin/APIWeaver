export type BatchAddOrgUserModel = any;
export interface BatchAddResultModel {
  failCount?: number;
  failResults?: FailResultModel[];
  okCount?: number;
  success?: boolean;
  successUserMap?: object;
}
export interface FailResultModel {
  failInfos?: FailInfoModel[];
  line?: number;
}

export type Body = BatchAddOrgUserModel;

/**
 * OK
 */
export type Response = BatchAddResultModel;

const path = '/api/v2/organizationUser/batchUploadNew';
const method = 'post';
