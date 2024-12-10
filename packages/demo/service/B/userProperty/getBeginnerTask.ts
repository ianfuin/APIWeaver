export interface BeginnerTaskModel {
  cube?: number;
  dashboard?: number;
  datasource?: number;
  demo?: number;
  screen?: number;
  upload?: number;
}

/**
 * OK
 */
export type Response = BeginnerTaskModel;

const path = '/api/v2/property/user/beginnerTask';
const method = 'get';
