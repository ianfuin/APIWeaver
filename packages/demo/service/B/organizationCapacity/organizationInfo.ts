export interface OrganizationCapacityInfoVO {
  /**
   * 数据集加速使用的容量
   */
  cubeUsedCapacity?: string;
  /**
   * 数据集加速容量使用率
   */
  cubeUsedRate?: number;
  /**
   * 探索空间上传文件使用的容量
   */
  fileUsedCapacity?: string;
  /**
   * 探索空间容量使用率
   */
  fileUsedRate?: number;
  organizationId?: string;
  /**
   * Quick引擎总容量
   */
  totalCapacity?: string;
  /**
   * 已使用容量
   */
  usedCapacity?: string;
  /**
   * 总容量使用率
   */
  usedCapacityRate?: string;
}

/**
 * OK
 */
export type Response = OrganizationCapacityInfoVO;

const path = '/api/v2/organization/quickindex/manager/organizationCapacityInfo';
const method = 'get';
