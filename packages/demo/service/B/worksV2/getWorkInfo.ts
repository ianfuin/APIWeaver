export interface WorkDetailInfoDTO {
  applying?: boolean;
  catalogId?: string;
  catalogName?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  hasAuth?: boolean;
  isFavorite?: boolean;
  ownerId?: string;
  ownerName?: string;
  workId?: string;
  workName?: string;
  workType?: string;
  workspaceId?: string;
  workspaceName?: string;
}

export interface Path {
  /**
   * workId
   */
  workId: string;
}

/**
 * OK
 */
export type Response = WorkDetailInfoDTO;

const path = '/api/v2/works/{workId}/info';
const method = 'get';
