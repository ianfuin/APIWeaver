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

export type Body = CustomMailDO;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/config/updateOrgMailConfig';
const method = 'post';
