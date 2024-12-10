export interface IdaasUserEvent {
  belongs?: MapStringObject[];
  displayName?: string;
  emails?: MapStringObject[];
  enabled?: string;
  extendFields?: object;
  externalId?: string;
  id?: string;
  locked?: string;
  organzationsOrderList?: string;
  phoneNumbers?: MapStringObject[];
  userName?: string;
}
export interface ResultModelBoolean {
  code?: string;
  data?: boolean;
  exStack?: string;
  message?: string;
  queryErrMsg?: string;
  querySql?: string;
  success?: boolean;
  traceId?: string;
}
export type MapStringObject = object;

export type Body = IdaasUserEvent;

/**
 * OK
 */
export type Response = ResultModelBoolean;

const path = '/api/v2/organization/idaas/addUser';
const method = 'post';
