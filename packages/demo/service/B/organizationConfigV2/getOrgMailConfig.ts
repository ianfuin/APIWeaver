export interface CustomMailDO {
  auth?: boolean;
  encryptMode?: string;
  host?: string;
  nickname?: string;
  password?: string;
  port?: number;
  protocol?: string;
  useCustomEmail?: boolean;
  username?: string;
}

/**
 * OK
 */
export type Response = CustomMailDO;

const path = '/api/v2/organization/config/getOrgMailConfig';
const method = 'get';
