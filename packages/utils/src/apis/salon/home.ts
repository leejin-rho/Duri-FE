import { ClosetGroomingResponse, DailyScheduleResponse, HomeQuotationRequestResponse } from "@duri-fe/utils";

import { salonInstance } from "../axiosConfig";

/** 진행중인 시술 */
export const getClosetGrooming = async (): Promise<ClosetGroomingResponse['response']> => {
  const response = await salonInstance.get('/shop/home/closet');
  return response.data.response;
}

/** 오늘 스케줄 */
export const getDailySchedule = async (): Promise<DailyScheduleResponse['response'][]> => {
  const response = await salonInstance.get('/shop/home/schedule');
  return response.data.response;
}

/** 요청서 확인 */
export const getHomeQuotationRequest = async (): Promise<HomeQuotationRequestResponse['response'][]> => {
  const response = await salonInstance.get('/shop/home/request');
  return response.data.response;
}