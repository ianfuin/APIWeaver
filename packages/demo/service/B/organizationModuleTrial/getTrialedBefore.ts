export interface ModuleTrialModel {
  allowTrial?: boolean;
  expiredDate?: string;
  functionKey?: string;
}

/**
 * OK
 */
export type Response = ModuleTrialModel[];

const path = '/api/v2/trial/module/info';
const method = 'get';
