export interface CustomizedMapMetryDTO {
  boundary?: string;
  center?: string;
  identifyPath?: string;
  level?: number;
  mapId?: string;
  metryId?: string;
  name?: string;
}
export interface Query {
  /**
   * mapId
   */
  mapId: string;
  /**
   * 单个或多个指定的path, 以,分隔,如: 0-1,0-2
   */
  identifyPaths?: string;
  /**
   * level
   */
  level?: number;
}

/**
 * OK
 */
export type Response = CustomizedMapMetryDTO[];

const path = '/api/v2/customGeoMap/getMetryByIdentifyPaths';
const method = 'get';
