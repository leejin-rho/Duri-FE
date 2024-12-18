import { duriInstance } from '@duri-fe/utils';

import {
  MyReviewResponseType,
  PetInfo,
  PetListInfo,
  RequestQuotationType,
  ReviewDetailResponse,
  UserInfo,
  VisitHistoryResponse,
} from '../types/my';

export const getMyReviews = async (): Promise<
  MyReviewResponseType['response']
> => {
  const response = await duriInstance.get('/user/review');
  return response.data.response;
};

export const getUserInfo = async (): Promise<UserInfo['response']> => {
  const response = await duriInstance.get('/user/profile');
  return response.data.response;
};

export const getPetListInfo = async (): Promise<PetListInfo['response']> => {
  const response = await duriInstance.get('/user/pets');
  return response.data.response;
};

export const getPetDetailInfo = async (petId: number): Promise<PetInfo> => {
  const response = await duriInstance.get(`/user/pet/${petId}`);
  return response.data.response;
};

export const putPetInfo = async (petId: number, formData: FormData) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data', // 데이터 형식 지정
    },
  };
  const response = await duriInstance.put(
    `/user/pet/${petId}`,
    formData,
    config,
  );
  return response.data.response;
};

export const putUserInfo = async (formData: FormData) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data', // 데이터 형식 지정
    },
  };
  const response = await duriInstance.put('/user/profile', formData, config);
  return response.data.response;
};

export const getRequestHistory = async (): Promise<
  RequestQuotationType['response']
> => {
  const response = await duriInstance.get('/quotation/request/user');
  return response.data.response;
};

export const getReviewDetail = async (
  reviewId: number,
): Promise<ReviewDetailResponse['response']> => {
  const response = await duriInstance.get(`/review/${reviewId}`);

  // 응답에서 petInfo의 imageURL을 image로 변환
  const transformedData = {
    ...response.data.response,
    petInfo: {
      ...response.data.response.petInfo,
      image: response.data.response.petInfo.imageURL, // imageURL을 image로 매핑
    },
  };

  return transformedData;
};

export const getVisitHistory = async (): Promise<
  VisitHistoryResponse['response']
> => {
  const response = await duriInstance.get('/user/history');
  return response.data.response;
};
