export interface BloodJsonModel {
  bloodModel?: string;
  published?: boolean;
}

export type Body = BloodJsonModel;

const path = '/api/v2/blood/analysis/updateBloodRelation';
const method = 'post';
