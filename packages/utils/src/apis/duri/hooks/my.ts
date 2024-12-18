import { useMutation, useQuery } from '@tanstack/react-query';

import {
  deletePetInfo,
  getMyReviews,
  getPetDetailInfo,
  getPetListInfo,
  getRequestHistory,
  getReviewDetail,
  getUserInfo,
  getVisitHistory,
  putPetInfo,
  putUserInfo,
} from '../my';

export const useGetMyReviews = () => {
  return useQuery({
    queryKey: ['getMyReviews'],
    queryFn: () => getMyReviews(),
    staleTime: 1000 * 60 * 30,
  });
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

export const usePutPetInfo = () => {
  return useMutation({
    mutationKey: ['putPetInfo'],
    mutationFn: ({ petId, formData }: { petId: number; formData: FormData }) =>
      putPetInfo(petId, formData),
    onSuccess: () => {
        alert('펫 정보가 수정되었습니다.');
    },
    onError: (error) => console.log(error),
  });
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

export const useGetRequestHistory = () => {
  return useQuery({
    queryKey: ['getRequestHistory'],
    queryFn: () => getRequestHistory(),
    staleTime: 1000 * 60 * 10,
  });
};

export const useGetReviewDetail = (reviewId: number) => {
  return useQuery({
    queryKey: ['getReviewDetail'],
    queryFn: () => getReviewDetail(reviewId),
    staleTime: 1000 * 60 * 10,
  });
};

export const useGetVisitHistory = () => {
  return useQuery({
    queryKey: ['getVisitHistory'],
    queryFn: () => getVisitHistory(),
    staleTime: 1000 * 60 * 10,
  });
};

export const useDeletePetInfo = () => {
  return useMutation({
    mutationKey: ['deletePetInfo'],
    mutationFn: (petId: number) => deletePetInfo(petId),
    onSuccess: () => {
      setTimeout(() => {
        alert('펫 정보가 삭제되었습니다.');
        window.location.reload();
      }, 2000)
    },
    onError: (error) => console.log(error),
  });
};
