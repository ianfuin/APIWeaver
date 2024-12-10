export interface UserTagMetaModel {
  tagDescription?: string;
  tagId?: string;
  tagName?: string;
  tagRelatedColumn?: string;
  tagRelatedConfig?: string;
  tagType?: number;
}

export type Body = UserTagMetaModel[];

/**
 * OK
 */
export type Response = UserTagMetaModel[];

const path = '/api/v2/usertag/meta/batch';
const method = 'post';
