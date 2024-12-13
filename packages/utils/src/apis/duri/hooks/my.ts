import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getMyReviews,
  getPetDetailInfo,
  getPetListInfo,
  getUserInfo,
  putPetInfo,
  putUserInfo,
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
  return useQuery({
    queryKey: ['getPetListInfo'],
    queryFn: () => getPetListInfo(),
    staleTime: 1000 * 60 * 30,
    select: (data) =>
      data.petProfileList.map((pet) => ({
        ...pet,
        neutering: pet.neutering ?? false,
        image: pet.image ?? null,
        lastGrooming: pet.lastGrooming ?? null,
      })),
  });
};
export const useGetPetDetailInfo = (petId: number) => {
  const { data, isError } = useQuery({
    queryKey: ['getPetDetailInfo'],
    queryFn: () => getPetDetailInfo(petId),
    staleTime: 1000 * 60 * 30,
  });
  return { data, isError };
};

export const usePutPetInfo = (handleNavigate: () => void) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['putPetInfo'],
    mutationFn: ({ petId, formData }: { petId: number; formData: FormData }) =>
      putPetInfo(petId, formData),
    onSuccess: () => handleNavigate(),
    onError: (error) => console.log(error),
  });
  return { mutateAsync };
};

export const useGetUserInfo = () => {
  const { data, isError } = useQuery({
    queryKey: ['getUserInfo'],
    queryFn: () => getUserInfo(),
    staleTime: 1000 * 60 * 30,
  });
  return { data, isError };
};

export const usePutUserInfo = (handleNavigate: () => void) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['putUserInfo'],
    mutationFn: (formData: FormData) => putUserInfo(formData),
    onSuccess: () => handleNavigate(),
    onError: (error) => console.log(error),
  });
  return { mutateAsync };
};
