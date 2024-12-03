import { RequestProps } from '@duri-fe/duri/assets/types/request';

import { duriInstance, ResponseBody } from '../axiosConfig';

interface RequestResponse extends ResponseBody {
  response: number;
}

export const postRequestQuotation = async (request: RequestProps) : Promise<RequestResponse> => {
  const response = await duriInstance.post(`quotation/request`, request);
  return response.data;
};
