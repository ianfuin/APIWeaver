export interface SnapshotShareModel {
  channelIds?: string[];
  customText?: string;
  mobileType?: string;
  snapshotId?: string;
  userIds?: string[];
}

export type Body = SnapshotShareModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/card/snapshot/share';
const method = 'post';
