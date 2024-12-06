import { useQuery } from '@tanstack/react-query';

import { getLastReservation, getRecommendedShopInfo, getRegularShopInfo, getUpcomingReservation } from '../home';


export const useGetRegularShopList = () => {
  const { data } = useQuery({
    queryKey: ['getRegularShopList'],
    queryFn: () => getRegularShopInfo(),
    staleTime: 1000 * 60 * 10,
  });

  return data;
};

export const useGetRecommendedShopList = () => {
  const { data } = useQuery({
    queryKey: ['getRecommendedShopList'],
    queryFn: () => getRecommendedShopInfo(),
    staleTime: 1000 * 60 * 10,
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

export const useGetLastReservation = () => {
  const { data } = useQuery({
    queryKey: ['getLastReservation'],
    queryFn: () => getLastReservation(),
    staleTime: 1000 * 60 * 10,
  });
  return data;
};