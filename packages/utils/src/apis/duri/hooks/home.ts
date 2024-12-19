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
  console.log(lat, lon);
  const isCoordinatesValid =
    lat !== null && lon !== null && lat !== 0 && lon !== 0;

  return useQuery({
    queryKey: ['getRecommendedShopList', lat, lon],
    queryFn: () => getRecommendedShopInfo(lat!, lon!),
    staleTime: 1000 * 60 * 10,
    enabled: isCoordinatesValid, // 유효한 경우에만 실행
  });
};

export const useGetUpcomingReservation = () => {
  return useQuery({
    queryKey: ['getUpcomingReservation'],
    queryFn: () => getUpcomingReservation(),
    staleTime: 1000 * 60 * 10,
  });
};
