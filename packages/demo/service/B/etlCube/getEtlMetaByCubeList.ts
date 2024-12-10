export interface CubeIdListModel {
  cubeIds?: string[];
}

export type Body = CubeIdListModel;

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/etl/cube/etlMeta';
const method = 'post';
