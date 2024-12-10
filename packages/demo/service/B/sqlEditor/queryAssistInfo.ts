export interface AssistDTO {
  allEntities?: boolean;
  entities?: MetaEntity[];
}
export interface MetaEntity {
  id?: string;
  name?: string;
  nameCn?: string;
  type?: string;
}
export interface Query {
  /**
   * dsId
   */
  dsId: string;
  /**
   * keyword
   */
  keyword?: string;
}

/**
 * OK
 */
export type Response = AssistDTO;

const path = '/api/v2/editor/assist';
const method = 'get';
