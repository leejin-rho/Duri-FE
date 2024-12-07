import { useQuery } from '@tanstack/react-query';

import { a, b } from '../shop';

export const useA = () => {
  const { data } = useQuery({
    queryKey: ['getRegularShopList'],
    queryFn: () => a(),
    staleTime: 1000 * 60 * 10,
  });

  return data;
}; //얘네 삭제해줘잉

export const useB = () => {
  const { data } = useQuery({
    queryKey: ['getRecommendedShopList'],
    queryFn: () => b(),
    staleTime: 1000 * 60 * 10,
  });
  return data;
}; //삭제삭제
