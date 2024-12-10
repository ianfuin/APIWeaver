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

export type Body = FreeTrialInfoDO;

/**
 * OK
 */
export type Response = boolean;

const path = '/restapi/trial/freeNew';
const method = 'post';
