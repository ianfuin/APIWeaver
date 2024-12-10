export interface Query {
  /**
   * robotId
   */
  robotId?: string;
  /**
   * templateName
   */
  templateName: any[];
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/smart/robot/recommend/template';
const method = 'delete';
