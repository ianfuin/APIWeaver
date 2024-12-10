export interface NotificationModel {
  unhandledApplyCount?: number;
  unhandledApprovalCount?: number;
  unreadMessageCount?: number;
  unreadRecommendCount?: number;
}

/**
 * OK
 */
export type Response = NotificationModel;

const path = '/api/v2/message/notification';
const method = 'get';
