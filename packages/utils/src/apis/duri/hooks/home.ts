import { useQuery } from '@tanstack/react-query';

import {
  getPetInfo,
  getRecommendedShopInfo,
  getRegularShopInfo,
  getUpcomingReservation,
} from '../home';

export const useGetPetInfo = () => {
  return useQuery({
    queryKey: ['getPetInfo'],
    queryFn: () => getPetInfo(),
    staleTime: 1000 * 60 * 10,
  });
};

export const useGetRegularShopList = () => {
  return useQuery({
    queryKey: ['getRegularShopList'],
    queryFn: () => getRegularShopInfo(),
    staleTime: 1000 * 60 * 30,
  });
};

export const useGetRecommendedShopList = (
  lat: number | null,
  lon: number | null,
) => {
  return useQuery({
    queryKey: ['getRecommendedShopList', lat, lon],
    queryFn: () => getRecommendedShopInfo(lat!, lon!), // null이 아닌 경우에만 호출
    staleTime: 1000 * 60 * 30,
    enabled: lat !== null && lon !== null, // lat과 lon이 null이 아닐 때만 활성화
  });
};

export const useGetUpcomingReservation = () => {
  return useQuery({
    queryKey: ['getUpcomingReservation'],
    queryFn: () => getUpcomingReservation(),
    staleTime: 1000 * 60 * 10,
  });
};
