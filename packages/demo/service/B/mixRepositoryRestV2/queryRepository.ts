export interface RepositoryModel {
  createTime?: string;
  dsId?: string;
  isMixRepository?: number;
  maxVolume?: number;
  modifyTime?: string;
  occupiedVolume?: number;
  repositoryId?: string;
  repositoryName?: string;
  resourceType?:
    | 'odps'
    | 'clivia'
    | 'mysql'
    | 'oracle'
    | 'sqlserver'
    | 'quickindex'
    | 'adb'
    | 'dingtalk'
    | 'postgresql'
    | 'greenplum'
    | 'hologres'
    | 'polardb'
    | 'polardb_pg';
  workspaceId?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

/**
 * OK
 */
export type Response = RepositoryModel;

const path = '/api/v2/mix/repository';
const method = 'get';
