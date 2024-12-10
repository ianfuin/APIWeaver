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

export interface Path {
  /**
   * eventId
   */
  eventId: string;
}

/**
 * OK
 */
export type Response = EventConfigModel;

const path = '/api/v2/formEvent/queryConfig/{eventId}';
const method = 'get';
