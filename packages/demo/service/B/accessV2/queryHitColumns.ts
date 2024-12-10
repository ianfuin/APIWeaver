export interface ApplyColumnRequestModel {
  cubeId?: string;
  fieldPathIds?: string[];
  worksId?: string;
}
export interface ApplyColumnResponseModel {
  canApply?: boolean;
  column?: string;
  name?: string;
  pathId?: string;
  reason?: string;
  type?: string;
  uniqueId?: string;
}

export type Body = ApplyColumnRequestModel;

/**
 * OK
 */
export type Response = ApplyColumnResponseModel[];

const path = '/api/v2/access/datalevel/columns';
const method = 'post';
