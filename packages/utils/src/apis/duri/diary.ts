import { duriInstance } from '../config';
import {
  DiaryDataResponse,
  DiaryDetailResponse,
  DiaryPetInfoResponse,
} from '../types/diary';

export const getDiaryData = async (): Promise<
  DiaryDataResponse['response']
> => {
  const { data } = await duriInstance.get(`/feedback/data`);
  return data.response;
};

export const getDiaryDetail = async ({
  quotationId,
}: {
  quotationId: number;
}): Promise<DiaryDetailResponse['response']> => {
  const { data } = await duriInstance.get(
    `/feedback/diary/detail/${quotationId}`,
  );
  return data.response;
};

export const getDiaryPetInfo = async ({
  quotationId,
}: {
  quotationId: number;
}): Promise<DiaryPetInfoResponse['response']> => {
  const { data } = await duriInstance.get(`/user/pet/info/${quotationId}`);
  return data.response;
};
