import { useQuery } from '@tanstack/react-query';

import { a, b } from '../test';

export const useA = () => {
  const { data } = useQuery({
    queryKey: ['getRegularShopList'],
    queryFn: () => a(),
    staleTime: 1000 * 60 * 10,
  });

  return data;
};

export const useB = () => {
  const { data } = useQuery({
    queryKey: ['getRecommendedShopList'],
    queryFn: () => b(),
    staleTime: 1000 * 60 * 10,
  });
  return data;
};
