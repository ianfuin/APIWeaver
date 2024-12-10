export interface UserRowLevelPermission {
  cubeId?: string;
  dimensionAttributes?: DimensionAttribute[];
  userId?: string;
  userType?: string;
}
export interface DimensionAttribute {
  caption?: string;
  dimAttrId?: string;
  dimId?: string;
  isInclude?: string;
  isMeasureDimension?: string;
  members?: Member[];
}

export type Body = UserRowLevelPermission[];

/**
 * OK
 */
export type Response = boolean;

const path = '/restapi/rowlevelpermission/cube/{cubeId}/merge';
const method = 'post';
