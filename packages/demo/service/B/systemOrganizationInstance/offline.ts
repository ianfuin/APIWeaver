export interface Query {
  /**
   * instanceId
   */
  instanceId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/system/instance/offline';
const method = 'post';
