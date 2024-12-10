export interface FreeTrialInfoDO {
  companyName?: string;
  dataResources?: string;
  email?: string;
  expectedUserNumber?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  industry?: string;
  phoneNumber?: string;
  requirementType?: number;
  trialBackground?: string;
  userId?: string;
  userRole?: string;
  verifierCode?: string;
  versionCode?: number;
}

/**
 * OK
 */
export type Response = FreeTrialInfoDO;

const path = '/restapi/trial/probationInfo';
const method = 'get';
