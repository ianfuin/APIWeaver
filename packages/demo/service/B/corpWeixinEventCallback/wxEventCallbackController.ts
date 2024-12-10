export interface Query {
  msg_signature?: string;
  timestamp?: string;
  nonce?: string;
  echostr?: string;
}

const path = '/rawapi/v2/weixin/event/callback';
const method = 'post';
