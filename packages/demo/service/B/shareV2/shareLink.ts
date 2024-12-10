export interface MobileShareLinkReqModel {
  mobileType?: string;
  resourceId?: string;
  shareUrl?: string;
  targetUserIds?: string[];
}

export type Body = MobileShareLinkReqModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/share/shareLink';
const method = 'post';
