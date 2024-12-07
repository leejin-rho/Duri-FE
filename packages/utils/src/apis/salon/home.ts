import { ClosetGroomingResponse, DailyScheduleResponse, HomeQuotationRequestResponse } from "@duri-fe/utils";

import { duriInstance } from "../axiosConfig";

/** 진행중인 시술 */
export const getClosetGrooming = async (): Promise<ClosetGroomingResponse['response']> => {
  const response = await duriInstance.get('/shop/home/closet/1');
  return response.data.response;
}

/** 오늘 스케줄 */
export const getDailySchedule = async (): Promise<DailyScheduleResponse['response'][]> => {
  const response = await duriInstance.get('/shop/home/schedule/1');
  return response.data.response;
}

/** 요청서 확인 */
export const getHomeQuotationRequest = async (): Promise<HomeQuotationRequestResponse['response'][]> => {
  const response = await duriInstance.get('/shop/home/request/1');
  return response.data.response;
}