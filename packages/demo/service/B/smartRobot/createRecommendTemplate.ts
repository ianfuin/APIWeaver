export interface SmartRobotTemplateConfigModel {
  templateData?: string;
  templateName?: string;
}
export interface Query {
  /**
   * robotId
   */
  robotId?: string;
}

export type Body = SmartRobotTemplateConfigModel[];

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/smart/robot/recommend/template';
const method = 'post';
