export interface Query {
  msg_signature?: string;
  timestamp?: string;
  nonce?: string;
  echostr?: string;
}

const path = '/auth_sso/weixin3rd/receive/suite';
const method = 'post';
