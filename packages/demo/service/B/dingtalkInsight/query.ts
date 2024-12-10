export interface QbiDsl {
  dashboardDSL?: DashboardDSL;
}
export interface DashboardDSL {
  components?: DashboardComponentDSL[];
  layout?: DashboardLayoutDSL[];
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * comment
   */
  comment?: string;
}

export interface Path {
  /**
   * appUuid
   */
  appUuid: string;
  /**
   * formId
   */
  formId: string;
}

/**
 * OK
 */
export type Response = QbiDsl;

const path = '/api/v2/dingtalk/insight/dsl/{appUuid}/{formId}';
const method = 'get';
