import { useQuery } from '@tanstack/react-query';

import {
  // getLastReservation,
  getPetInfo,
  getRecommendedShopInfo,
  getRegularShopInfo,
  getUpcomingReservation,
} from '../home';

export const useGetPetInfo = () => {
  const { data } = useQuery({
    queryKey: ['getPetInfo'],
    queryFn: () => getPetInfo(),
    staleTime: 1000 * 60 * 10,
  });
  if(data) return data;
};

export const useGetRegularShopList = () => {
  const { data } = useQuery({
    queryKey: ['getRegularShopList'],
    queryFn: () => getRegularShopInfo(),
    staleTime: 1000 * 60 * 30,
  });
  return data;
};

export const useGetRecommendedShopList = () => {
  const { data } = useQuery({
    queryKey: ['getRecommendedShopList'],
    queryFn: () => getRecommendedShopInfo(),
    staleTime: 1000 * 60 * 30,
  });
  return data;
};

export const useGetUpcomingReservation = () => {
  const { data } = useQuery({
    queryKey: ['getUpcomingReservation'],
    queryFn: () => getUpcomingReservation(),
    staleTime: 1000 * 60 * 10,
  });
  return data;
};
