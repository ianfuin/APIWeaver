export interface OrganizationWatermarkDTO {
  allowCubeWatermark?: boolean;
  allowOperator?: boolean;
  isText?: boolean;
  watermarkLogo?: string;
  watermarkLogoSpace?: string;
  watermarkText?: MapStringString[];
  watermarkTextColor?: object;
  watermarkTextSize?: number;
  watermarkTextSpace?: string;
}
export type MapStringString = object;

/**
 * OK
 */
export type Response = OrganizationWatermarkDTO;

const path = '/api/v2/watermark/queryConfig';
const method = 'get';
