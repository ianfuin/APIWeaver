export interface CreateSnapshotModel {
  snapshotExtra?: string;
  snapshots?: SnapshotCardModel[];
  thumbnail?: string;
}
export interface SnapshotCardModel {
  cardId?: string;
  cardSource?: string;
  cardSourceId?: string;
  components?: SnapshotCardComponentModel[];
}

export type Body = CreateSnapshotModel;

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/card/snapshot/create';
const method = 'post';
