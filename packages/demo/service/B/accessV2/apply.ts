export interface ApplyEvent {
  applyReason?: string;
  approverId?: string;
  authPointsValue?: number;
  channel?: number;
  childResourceIds?: string[];
  expireDate?: string;
  resourceId?: string;
  resourceType?: string;
  roleId?: number;
  roleIdObj?: number;
  worksId?: string;
}

export type Body = ApplyEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/access/apply';
const method = 'post';
