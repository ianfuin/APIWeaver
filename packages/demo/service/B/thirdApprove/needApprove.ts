export interface ThirdApproveEvent {
  operatorType?: number;
  option?: ThirdApproveOption;
  worksId?: string;
  worksType?: string;
}
export interface ThirdApproveResultVO {
  approveId?: string;
  approveUrl?: string;
  needApprove?: boolean;
  status?: number;
}
export interface ThirdApproveOption {
  componentId?: string;
  context?: string;
  worksName?: string;
}

export type Body = ThirdApproveEvent;

/**
 * OK
 */
export type Response = ThirdApproveResultVO;

const path = '/api/v2/thirdApprove/checkApprove';
const method = 'post';
