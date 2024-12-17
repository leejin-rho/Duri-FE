import { BaseResponse } from './base';
import { RequestDetailPetType } from './quotation';

export interface GetPetInfoByQuotationIdResponse extends BaseResponse {
  response: {
    petProfileResponse: RequestDetailPetType;
    customerName: string;
    customerPhone: string;
  };
}
