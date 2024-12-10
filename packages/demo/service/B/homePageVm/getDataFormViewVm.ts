export interface ModelAndView {
  empty?: boolean;
  model?: object;
  modelMap?: object;
  reference?: boolean;
  status?:
    | '100'
    | '101'
    | '102'
    | '103'
    | '200'
    | '201'
    | '202'
    | '203'
    | '204'
    | '205'
    | '206'
    | '207'
    | '208'
    | '226'
    | '300'
    | '301'
    | '302'
    | '302'
    | '303'
    | '304'
    | '305'
    | '307'
    | '308'
    | '400'
    | '401'
    | '402'
    | '403'
    | '404'
    | '405'
    | '406'
    | '407'
    | '408'
    | '409'
    | '410'
    | '411'
    | '412'
    | '413'
    | '413'
    | '414'
    | '414'
    | '415'
    | '416'
    | '417'
    | '418'
    | '419'
    | '420'
    | '421'
    | '422'
    | '423'
    | '424'
    | '426'
    | '428'
    | '429'
    | '431'
    | '451'
    | '500'
    | '501'
    | '502'
    | '503'
    | '504'
    | '505'
    | '506'
    | '507'
    | '508'
    | '509'
    | '510'
    | '511';
  view?: View;
  viewName?: string;
}
export interface View {
  contentType?: string;
}

export interface Path {
  /**
   * reportId
   */
  reportId: string;
}

/**
 * OK
 */
export type Response = ModelAndView;

const path = '/form-system/publish/preview/{reportId}';
const method = 'head';

;
