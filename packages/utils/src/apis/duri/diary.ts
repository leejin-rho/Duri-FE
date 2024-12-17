import { duriInstance } from '../config';
import { DiaryDataResponse } from '../types/diary';

export const getDiaryData = async (): Promise<
  DiaryDataResponse['response']
> => {
  const { data } = await duriInstance.get(`/feedback/data`);
  return data.response;
};
