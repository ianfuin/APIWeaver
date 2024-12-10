export interface PublishPasswordModel {
  password?: string;
  treeId?: string;
  usePassword?: boolean;
}

export type Body = PublishPasswordModel;

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/publishPassword/verify';
const method = 'post';
