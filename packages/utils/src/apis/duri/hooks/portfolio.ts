import { useQuery } from '@tanstack/react-query';

import { BaseError } from '../../types';
import {
  PortfolioDetailResponse,
  PortfolioResponse,
} from '../../types/portfolio';
import { UseQueryProps } from '../../types/tanstack';
import { getGroomerPortfolio, getPortfolioDetail } from '../portfolio';

type UseGetGroomerPortfolio = UseQueryProps<
  PortfolioResponse['response'],
  BaseError
> & {
  groomerId: number;
};

export const UseGetGroomerPortfolio = ({
  queryKey,
  options,
  groomerId,
}: UseGetGroomerPortfolio) => {
  return useQuery({
    queryKey: ['getGroomerPortfolio', groomerId, ...(queryKey || [])],
    queryFn: () => getGroomerPortfolio({ groomerId }),
    enabled: !!groomerId,
    ...options,
  });
};

type UseGetPortfolioDetail = UseQueryProps<
  PortfolioDetailResponse['response'],
  BaseError
> & {
  feedbackId: number;
};

export const UseGetPortfolioDetail = ({
  queryKey,
  options,
  feedbackId,
}: UseGetPortfolioDetail) => {
  return useQuery({
    queryKey: ['getPortfolioDetail', feedbackId, ...(queryKey || [])],
    queryFn: () => getPortfolioDetail({ feedbackId }),
    enabled: !!feedbackId,
    ...options,
  });
};
