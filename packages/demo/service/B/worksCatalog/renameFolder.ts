export interface FolderDTO {
  treeId?: string;
  treeName?: string;
}

export type Body = FolderDTO;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/catalog/renameFolder';
const method = 'post';
