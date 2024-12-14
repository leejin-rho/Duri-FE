import { useQuery } from '@tanstack/react-query';

import {
  // getLastReservation,
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
  const { data, isError } = useQuery({
    queryKey: ['getRegularShopList'],
    queryFn: () => getRegularShopInfo(),
    staleTime: 1000 * 60 * 30,
  });
  return { data, isError };
};

export const useGetRecommendedShopList = (
  lat: number | null,
  lon: number | null,
) => {
  const { data, isError } = useQuery({
    queryKey: ['getRecommendedShopList', lat, lon],
    queryFn: () => getRecommendedShopInfo(lat!, lon!), // null이 아닌 경우에만 호출
    staleTime: 1000 * 60 * 30,
    enabled: lat !== null && lon !== null, // lat과 lon이 null이 아닐 때만 활성화
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
