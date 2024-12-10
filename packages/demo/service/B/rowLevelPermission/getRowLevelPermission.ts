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
export interface Query {
  /**
   * userType
   */
  userType: string;
}

export interface Path {
  /**
   * 数据集id
   */
  cubeId?: string;
  /**
   * 用户id
   */
  userId?: string;
}

/**
 * OK
 */
export type Response = UserRowLevelPermission;

const path = '/restapi/rowlevelpermission/cube/{cubeId}/user/{userId}/get';
const method = 'get';
