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

export type Body = TagRowLevelPermission[];

/**
 * OK
 */
export type Response = boolean;

const path = '/restapi/rowlevelpermission/cube/{cubeId}/merge4Tag';
const method = 'post';
