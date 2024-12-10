export interface OpenApproveDataInTableModel {
  approverIds?: string[];
  formIds?: string[];
  openApproveDataInTable?: number;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

export type Body = OpenApproveDataInTableModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dataForm/setApprovers';
const method = 'post';
