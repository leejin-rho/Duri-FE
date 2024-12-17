import { useQuery } from '@tanstack/react-query';

import { BaseError } from '../../types';
import {
  PorfolioDetailResponse,
  PorfolioResponse,
} from '../../types/portfolio';
import { UseQueryProps } from '../../types/tanstack';
import { getGroomerPorfolio, getPortfolioDetail } from '../portfolio';

type UseGetGroomerPorfolio = UseQueryProps<
  PorfolioResponse['response'],
  BaseError
> & {
  groomerId: number;
};

export const UseGetGroomerPorfolio = ({
  queryKey,
  options,
  groomerId,
}: UseGetGroomerPorfolio) => {
  return useQuery({
    queryKey: ['getGroomerPorfolio', groomerId, ...(queryKey || [])],
    queryFn: () => getGroomerPorfolio({ groomerId }),
    enabled: !!groomerId,
    ...options,
  });
};

type UseGetPorfolioDetail = UseQueryProps<
  PorfolioDetailResponse['response'],
  BaseError
> & {
  feedbackId: number;
};

export const UseGetPorfolioDetail = ({
  queryKey,
  options,
  feedbackId,
}: UseGetPorfolioDetail) => {
  return useQuery({
    queryKey: ['getPortfolioDetail', feedbackId, ...(queryKey || [])],
    queryFn: () => getPortfolioDetail({ feedbackId }),
    enabled: !!feedbackId,
    ...options,
  });
};
