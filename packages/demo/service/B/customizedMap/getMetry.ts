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
   * metryId
   */
  metryId: string;
}

/**
 * OK
 */
export type Response = CustomizedMapMetryDTO;

const path = '/api/v2/customGeoMap/getMetry';
const method = 'get';
