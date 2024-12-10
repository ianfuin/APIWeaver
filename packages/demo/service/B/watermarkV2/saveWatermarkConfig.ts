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

export type Body = OrganizationWatermarkDTO;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/watermark/saveConfig';
const method = 'post';