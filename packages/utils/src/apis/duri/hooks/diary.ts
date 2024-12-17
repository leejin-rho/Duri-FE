import { useQuery } from '@tanstack/react-query';

import { BaseError } from '../../types';
import { DiaryDataResponse } from '../../types/diary';
import { UseQueryProps } from '../../types/tanstack';
import { getDiaryData } from '../diary';

type UseGetDiaryData = UseQueryProps<DiaryDataResponse['response'], BaseError>;

export const UseGetDiaryData = ({ queryKey, options }: UseGetDiaryData) => {
  return useQuery({
    queryKey: ['getDiaryData', ...(queryKey || [])],
    queryFn: () => getDiaryData(),
    ...options,
  });
};
