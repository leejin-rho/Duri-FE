import { duriInstance } from "../axiosConfig";

export const getQuotationInfo = async (
    quotationId: string,
    // ): Promise<QuotationResponse> => {
  ) => {
    const response = await duriInstance.get(`quotation/${quotationId}`);
    return response.data;
  };