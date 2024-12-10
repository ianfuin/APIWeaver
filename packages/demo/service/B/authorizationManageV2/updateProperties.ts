export interface WorkBasicPropertyEvent {
  authLevel?: number;
  description?: string;
  id?: string;
  ownerId?: string;
  scanFullTable?: boolean;
  showName?: string;
  workType?: string;
}

export type Body = WorkBasicPropertyEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/authorize/resource/properties';
const method = 'put';
