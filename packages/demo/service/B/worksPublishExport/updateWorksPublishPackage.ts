export interface ImportPackageCreateEvent {
  createor?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  modifier?: string;
  organizationId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceWorks?: ResourceWorks;
  workspaceId?: string;
}
export interface ResourceWorks {
  dashBoard?: ResourceWorksDetail;
  dataForm?: ResourceWorksDetail;
  dataPortal?: ResourceWorksDetail;
  dataSet?: ResourceWorksDetail;
  dataSource?: ResourceWorksDetail;
  offline?: ResourceWorksDetail;
  report?: ResourceWorksDetail;
  screen?: ResourceWorksDetail;
}

export type Body = ImportPackageCreateEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/workspublish/export';
const method = 'put';
