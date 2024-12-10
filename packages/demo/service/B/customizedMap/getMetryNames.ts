export interface MetryNameDTO {
  level?: number;
  mapId?: string;
  names?: string[];
}
export interface Query {
  /**
   * mapId
   */
  mapId: string;
  /**
   * levels
   */
  levels: string;
  /**
   * identifyPathPrefix
   */
  identifyPathPrefix?: string;
  /**
   * limit
   */
  limit?: number;
}

/**
 * OK
 */
export type Response = MetryNameDTO[];

const path = '/api/v2/customGeoMap/getMetryNames';
const method = 'get';
