export interface Query {
  /**
   * mapId
   */
  mapId: string;
}

/**
 * OK
 */
export type Response = number;

const path = '/api/v2/customGeoMap/getMaxLevel';
const method = 'get';
