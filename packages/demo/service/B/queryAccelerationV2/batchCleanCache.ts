export interface CubeIdListModel {
  cubeIds?: string[];
}

export type Body = CubeIdListModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/acceleration/cube/batchCleanCache';
const method = 'post';
