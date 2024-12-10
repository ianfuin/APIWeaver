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
   * level
   */
  level: number;
}

/**
 * OK
 */
export type Response = CustomizedMapMetryDTO[];

const path = '/api/v2/customGeoMap/getMetryByLevel';
const method = 'get';
