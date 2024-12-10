export interface UpdateStatusModel {
  channelId?: string;
  status?: number;
}

export type Body = UpdateStatusModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/channel/updateStatus';
const method = 'post';
