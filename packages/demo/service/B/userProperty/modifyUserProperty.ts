export interface UserPropertyEvent {
  propertyType?: string;
  value?: string;
}

export type Body = UserPropertyEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/property/user';
const method = 'post';
