export interface Query {
  /**
   * cubeId
   */
  cubeId: string;
  /**
   * pathId
   */
  pathId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/admin/dataset/mark';
const method = 'get';

  cubeId: string;
}

/**
 * OK
 */
export type Response = CubeMeasureResult;

const path = '/api/v2/admin/dataset/listMeasures';
const method = 'get';
