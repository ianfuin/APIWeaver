export interface SmartRobotConfigModel {
  open?: boolean;
  robotId?: string;
  robotName?: string;
  workspaceId?: string;
}

export type Body = SmartRobotConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/smart/robot';
const method = 'post';
