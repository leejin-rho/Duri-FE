import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getMyReviews,
  getPetDetailInfo,
  getPetListInfo,
  patchPetInfo,
} from '../my';

export const useGetMyReviews = () => {
  const { data, isError } = useQuery({
    queryKey: ['getUpcomingReservation'],
    queryFn: () => getMyReviews(),
    staleTime: 1000 * 60 * 10,
  });
  return { data, isError };
};

export const useGetPetListInfo = () => {
  const { data, isError } = useQuery({
    queryKey: ['getPetListInfo'],
    queryFn: () => getPetListInfo(),
    staleTime: 1000 * 60 * 30,
  });
  return { data, isError };
};
export const useGetPetDetailInfo = (petId: number) => {
  const { data, isError } = useQuery({
    queryKey: ['getPetDetailInfo'],
    queryFn: () => getPetDetailInfo(petId),
    staleTime: 1000 * 60 * 30,
  });
  return { data, isError };
};

export const usePatchPetInfo = (handleNavigate: () => void) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['patchPetInfo'],
    mutationFn: ({ petId, formData }: { petId: number; formData: FormData }) =>
      patchPetInfo(petId, formData),
    onSuccess: () => handleNavigate,
    onError: (error) => console.log(error),
  });
  return { mutateAsync };
};
