export interface TagRowLevelPermission {
  cubeId?: string;
  dimensionAttribute?: DimensionAttribute;
  tagId?: string;
}
export interface DimensionAttribute {
  caption?: string;
  dimAttrId?: string;
  dimId?: string;
  isInclude?: string;
  isMeasureDimension?: string;
  members?: Member[];
}

export interface Path {
  /**
   * cubeId
   */
  cubeId: string;
}

/**
 * OK
 */
export type Response = TagRowLevelPermission[];

const path = '/restapi/rowlevelpermission/cube/{cubeId}/tagRowLevelPermission';
const method = 'get';
