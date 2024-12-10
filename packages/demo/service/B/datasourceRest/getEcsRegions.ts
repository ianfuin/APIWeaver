export interface Region {
  localName?: string;
  regionId?: string;
  status?: string;
}

/**
 * OK
 */
export type Response = Region;

const path = '/restapi/datasource/ecs/regions';
const method = 'get';
