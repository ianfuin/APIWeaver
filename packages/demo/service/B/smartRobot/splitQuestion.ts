export interface SmartRobotSplitResultModel {
  candidates?: SmartRobotSplitResultModel[];
  columnId?: string;
  columnName?: string;
  end?: number;
  question_value?: string;
  score?: number;
  start?: number;
  type?: string;
  value?: string;
}
export interface Query {
  /**
   * question
   */
  question: string;
  /**
   * cubeId
   */
  cubeId?: string;
  /**
   * robotId
   */
  robotId: string;
}

/**
 * OK
 */
export type Response = SmartRobotSplitResultModel[];

const path = '/api/v2/smart/robot/question/split';
const method = 'get';
