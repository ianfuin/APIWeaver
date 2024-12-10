export interface SnapshotInfoModel {
  creator?: string;
  gmtCreate?: string;
  organizationId?: string;
  snapshotExtra?: string;
  snapshotId?: string;
  snapshots?: SnapshotCardModel[];
  thumbnail?: string;
}
export interface SnapshotCardModel {
  cardId?: string;
  cardSource?: string;
  cardSourceId?: string;
  components?: SnapshotCardComponentModel[];
}
export interface Query {
  /**
   * snapshotId
   */
  snapshotId: string;
}

/**
 * OK
 */
export type Response = SnapshotInfoModel;

const path = '/api/v2/card/snapshot/info';
const method = 'get';
