// import { RequestProps } from '@duri-fe/duri/assets/types/RequestProps';
import { duriInstance } from '../axiosConfig';

interface TimeProps {
  time9: boolean;
  time10: boolean;
  time11: boolean;
  time12: boolean;
  time13: boolean;
  time14: boolean;
  time15: boolean;
  time16: boolean;
  time17: boolean;
  time18: boolean;
}
interface RequestProps extends TimeProps {
  petId?: number;
  menu: string[];
  addMenu: string[];
  specialMenu: string[];
  design: string[];
  etc: string;
  day: Date;
  shopIds: number[];
}

export const postRequestQuotation = async (request: RequestProps) => {
  // ): Promise<RequestResponse> => {
  const response = await duriInstance.post(`quotation/request`, request);
  return response.data;
};

export const getQuotationInfo = async (
  quotationId: string,
  // ): Promise<QuotationResponse> => {
) => {
  const response = await duriInstance.get(`quotation/${quotationId}`);
  return response.data;
};
