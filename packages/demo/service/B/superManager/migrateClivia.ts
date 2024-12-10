export interface Query {
  /**
   * groupId
   */
  groupId: number;
  /**
   * migrated
   */
  migrated: number;
}

/**
 * OK
 */
export type Response = object;

const path = '/restapi/migrateCliviaGroup';
const method = 'get';
