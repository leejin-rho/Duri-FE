import { duriInstance } from "../axiosConfig";
import { BaseResponse } from "../types";

interface RequestItemsType {
    quotationId: number;
    createdAt: Date;
    expiredAt: Date;
    shops: [
      {
        shopId: number;
        shopName: string;
      },
    ];
  }

  interface RequestItemsResponse extends BaseResponse {
    response: RequestItemsType[];
  }

export const getRequestItems = async (): Promise<RequestItemsResponse['response']> => {
    const response = await duriInstance.get(`quotation/request`);
    return response.data;
  };


export const getQuotationInfo = async (
    quotationId: number,
    // ): Promise<QuotationResponse> => {
  ) => {
    const response = await duriInstance.get(`quotation/${quotationId}`);
    return response.data;
  };