import { useQuery } from '@tanstack/react-query';

import {
  // getLastReservation,
  getPetInfo,
  getRecommendedShopInfo,
  getRegularShopInfo,
  getUpcomingReservation,
} from '../home';

export const useGetPetInfo = () => {
  const { data, isError } = useQuery({
    queryKey: ['getPetInfo'],
    queryFn: () => getPetInfo(),
    staleTime: 1000 * 60 * 10,
  });
  return { data, isError };
};

export const useGetRegularShopList = () => {
  const { data, isError } = useQuery({
    queryKey: ['getRegularShopList'],
    queryFn: () => getRegularShopInfo(),
    staleTime: 1000 * 60 * 30,
  });
  return { data, isError };
};

export const useGetRecommendedShopList = () => {
  const { data, isError } = useQuery({
    queryKey: ['getRecommendedShopList'],
    queryFn: () => getRecommendedShopInfo(),
    staleTime: 1000 * 60 * 30,
  });
  return { data, isError };
};

export const useGetUpcomingReservation = () => {
  const { data, isError } = useQuery({
    queryKey: ['getUpcomingReservation'],
    queryFn: () => getUpcomingReservation(),
    staleTime: 1000 * 60 * 10,
  });
  return { data, isError };
};
