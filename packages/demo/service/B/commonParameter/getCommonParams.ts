export interface CommonParam {
  gmtCreate?: string;
  gmtModified?: string;
  group?: string;
  paramName?: string;
  paramValue?: string;
}

export type Body = CommonParam[];

/**
 * OK
 */
export type Response = object;

const path = '/restapi/commonparam/batchQuery';
const method = 'post';
