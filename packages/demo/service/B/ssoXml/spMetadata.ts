export interface Query {
  /**
   * domain
   */
  domain: string;
}

const path = '/auth_sso/xml/saml/spMetadata.xml';
const method = 'get';
