import { ClosetGroomingResponse } from "@duri-fe/utils";

import { duriInstance } from "../axiosConfig";

/** 진행중인 시술 */
export const getClosetGrooming = async (): Promise<ClosetGroomingResponse['response']> => {
  const response = await duriInstance.get('/shop/home/closet/1');
  return response.data.response;
}