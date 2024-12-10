export interface MobileUserDO {
  accountId?: string;
  accountName?: string;
  accountType?: number;
  bindingAccountId?: string;
  bindingAccountName?: string;
  bindingAccountType?: string;
  bindingNick?: string;
  nickname?: string;
  userId?: string;
}
export interface Query {
  /**
   * channelType
   */
  channelType: string;
  /**
   * keyword
   */
  keyword?: string;
}

/**
 * OK
 */
export type Response = MobileUserDO[];

const path = '/api/v2/organizationUser/mobile/list';
const method = 'get';
