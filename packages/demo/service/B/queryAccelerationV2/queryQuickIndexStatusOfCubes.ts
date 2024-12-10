export interface CubeIdListModel {
  cubeIds?: string[];
}
export interface QuickIndexStatusOfCubeModel {
  hasQuickIndexErrorCubes?: string[];
  openQuickIndexCubes?: string[];
}

export type Body = CubeIdListModel;

/**
 * OK
 */
export type Response = QuickIndexStatusOfCubeModel;

const path = '/api/v2/acceleration/queryQuickIndexStatusOfCubes';
const method = 'post';
