export interface EventTypeModel {
  primaryType?: string;
  primaryTypeCn?: string;
  primaryTypeSortNum?: number;
  sndTypeMap?: object;
}

/**
 * OK
 */
export type Response = EventTypeModel[];

const path = '/api/v2/event/support/list';
const method = 'get';
