export interface ResultModelSessionInfo {
  data?: SessionInfo;
  errCode?: number;
  errMsg?: string;
  requestId?: string;
}
export interface SessionInfo {
  basicUserInfo?: BasicSessionInfo;
  customSessionInfo?: object;
  gmtCreate?: string;
}

export interface Path {
  /**
   * sessionId
   */
  sessionId: string;
}

/**
 * OK
 */
export type Response = ResultModelSessionInfo;

const path = '/qc/openapi/user/session/{sessionId}';
const method = 'get';
