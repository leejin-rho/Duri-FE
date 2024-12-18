import { duriInstance } from '../config';
import { DiaryDataResponse, DiaryDetailResponse } from '../types/diary';

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
    {
      params: { quotationId },
    },
  );
  return data.response;
};
