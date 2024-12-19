import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { BaseError, MyShopReviewListResponse } from '../../types';
import {
  GetMyShopInfoResponse,
  GroomerAndShopProfileResponse,
  PutShopInfoRequest,
  PutShopInfoResponse,
} from '../../types/my';
import { UseQueryProps } from '../../types/tanstack';
import {
  getGroomerInfo,
  getMyShopInfo,
  getMyShopReviewList,
  putGroomerInfo,
  putShopInfo,
} from '../my';

import { putShopImage } from './../my';

type UseGetGroomerInfo = UseQueryProps<
  GroomerAndShopProfileResponse['response'],
  BaseError
> & {
  groomerId: number;
};

export const UseGetGroomerInfo = ({
  queryKey,
  options,
  groomerId,
}: UseGetGroomerInfo) => {
  return useQuery({
    queryKey: ['getGroomerInfo', groomerId, ...(queryKey || [])],
    queryFn: () => getGroomerInfo({ groomerId }),
    enabled: !!groomerId,
    ...options,
  });
};

type UseGetMyShopInfo = UseQueryProps<
  GetMyShopInfoResponse['response'],
  BaseError
>;

/** [GET] /groomer/profile 미용사 마이샵 */
export const useGetMyShopInfo = ({ queryKey, options }: UseGetMyShopInfo) => {
  return useQuery({
    queryKey: ['getMyShopInfo', ...(queryKey || [])],
    queryFn: () => getMyShopInfo(),
    ...options,
  });
};

type UseGetMyShopReviewList = UseQueryProps<
  MyShopReviewListResponse['response'],
  BaseError
>;

/** [GET] /shop/review 마이샵 리뷰 조회 */
export const UseGetMyShopReviewList = ({
  queryKey,
  options,
}: UseGetMyShopReviewList) => {
  return useQuery({
    queryKey: ['getMyShopReviewList', ...(queryKey || [])],
    queryFn: () => getMyShopReviewList(),
    ...options,
  });
};

/** [PUT] /shop/profile/image 미용사 마이샵 사진 수정 */
export const UsePutShopImage = () => {
  const queryClient = useQueryClient();
  return useMutation<PutShopInfoResponse['response'], Error, FormData>({
    mutationFn: (formData: FormData) => putShopImage(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getMyShopInfo'] });
    },
    onError: (error) => {
      console.error(error);
      alert('샵 사진 등록에 실패했습니다.');
    },
  });
};

/** [PUT] /shop/profile 미용사 마이샵 정보 수정 */
export const UsePutShopInfo = () => {
  const queryClient = useQueryClient();
  return useMutation<
    PutShopInfoResponse['response'],
    Error,
    PutShopInfoRequest
  >({
    mutationFn: (request: PutShopInfoRequest) => putShopInfo(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getMyShopInfo'] });
    },
    onError: (error) => {
      console.error(error);
      alert('샵 정보 수정에 실패했습니다.');
    },
  });
};

/** [PUT] /groomer/profile/{groomerId} 마이샵 미용사 수정 */
export const UsePutGroomerInfo = () => {
  return useMutation<
    PutShopInfoResponse['response'],
    Error,
    { groomerId: number; formData: FormData }
  >({
    mutationFn: ({ groomerId, formData }) =>
      putGroomerInfo(groomerId, formData),
    onError: (error) => {
      console.error(error);
      alert('샵 정보 수정에 실패했습니다.');
    },
  });
};
