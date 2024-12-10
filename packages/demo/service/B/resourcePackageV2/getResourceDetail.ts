export interface ImportPackageResultVO {
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
  workspaceName?: string;
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

export interface Path {
  /**
   * resourceId
   */
  resourceId: string;
}

/**
 * OK
 */
export type Response = ImportPackageResultVO;

const path = '/api/v2/resourcepackage/export/detail/{resourceId}';
const method = 'get';
