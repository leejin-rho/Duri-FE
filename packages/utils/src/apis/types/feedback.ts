import { BaseResponse } from './base';
import { RequestDetailPetType } from './quotation';

export interface GetPetInfoByQuotationIdResponse extends BaseResponse {
  response: {
    petProfileResponse: RequestDetailPetType;
    customerName: string;
    customerPhone: string;
  };
}

export interface PostFeedbackResponse extends BaseResponse {
  response: {
    feedbackId: number;
    friendly: string;
    reaction: string;
    behavior: string;
    noticeContent: string;
    portfolioContent: string;
    expose: boolean;
    deleted: boolean;
    feedbackImages: string[];
  };
}
