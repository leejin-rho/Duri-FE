import {
  ClosetGroomingResponse,
  DailyScheduleResponse,
  GroomersListProfileResponse,
  HomeQuotationRequestResponse,
  HomeShopInfoResponse,
  salonInstance,
} from '@duri-fe/utils';

/** 진행중인 시술 */
export const getClosetGrooming = async (): Promise<
  ClosetGroomingResponse['response']
> => {
  const response = await salonInstance.get('/shop/home/closet');
  return response.data.response;
};

/** 오늘 스케줄 */
export const getDailySchedule = async (): Promise<
  DailyScheduleResponse['response'][]
> => {
  const response = await salonInstance.get('/shop/home/schedule');
  return response.data.response;
};

/** 요청서 확인 */
export const getHomeQuotationRequest = async (): Promise<
  HomeQuotationRequestResponse['response'][]
> => {
  const response = await salonInstance.get('/shop/home/request');
  return response.data.response;
};

/** 홈 상점 정보 */
export const getHomeShopInfo = async (): Promise<
  HomeShopInfoResponse['response']
> => {
  const response = await salonInstance.get('/shop');
  return response.data.response;
};

/** 미용 완료 */
export const putGroomingComplete = async (quotationId: number) => {
  const response = await salonInstance.put(
    `/shop/home/complete/${quotationId}`,
    {
      complete: true,
    },
  );
  return response.data.response;
};

/** 노쇼 */
export const putGroomingNoshow = async (quotationId: number) => {
  const response = await salonInstance.put(
    `/shop/home/no-show/${quotationId}`,
    {
      noshow: true,
    },
  );
  return response.data.response;
};

//미용사 id 조회
export const getGroomersProfileList = async (): Promise<
GroomersListProfileResponse['response']
> => {
  const { data } = await salonInstance.get('/shop/groomers');
  return data.response;
};
