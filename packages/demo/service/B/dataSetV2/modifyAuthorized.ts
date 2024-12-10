export interface ModifyCubeAuthorizedParam {
  authControl?: boolean;
  authorizedUseType?: number;
  cubeId?: string;
}

export type Body = ModifyCubeAuthorizedParam;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dataset/authorizing';
const method = 'put';
