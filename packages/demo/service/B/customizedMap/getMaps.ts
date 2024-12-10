export interface CustomizedMapDTO {
  content?: string;
  createUser?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: string;
  modifyUser?: string;
  name?: string;
  type?: 'CUSTOM_AREA' | 'CUSTOM_GEOJSON' | 'CUSTOM_TREE' | 'CUSTOM_PICTURE';
  valid?: boolean;
}
export interface Query {
  /**
   * mapIds
   */
  mapIds: string;
}

/**
 * OK
 */
export type Response = CustomizedMapDTO[];

const path = '/api/v2/customGeoMap/getMapList';
const method = 'get';
