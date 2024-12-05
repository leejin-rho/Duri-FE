import { useQuery } from '@tanstack/react-query';

import { getPetInfo } from '../pet';

export const useGetPetInfo = () => {
  const { data } = useQuery({
    queryKey: ['getPetInfo'],
    queryFn: () => getPetInfo(),
    staleTime: 1000 * 60 * 10,
  });
  return data;
};
