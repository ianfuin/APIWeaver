export interface EventConfigModel {
  colRelations?: EventColRelationModel[];
  eventId?: string;
  formId?: string;
  fromCubeId?: string;
  fromEntityId?: string;
  fromPrimaryAttrId?: string;
  name?: string;
  style?: string;
  toEntityId?: string;
  toPrimaryColName?: string;
  type?: number;
}
export interface EventColRelationModel {
  fromAttrId?: string;
  toColName?: string;
}

export type Body = EventConfigModel;

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/formEvent/config';
const method = 'post';
