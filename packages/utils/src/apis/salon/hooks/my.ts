import { useMutation, useQuery } from '@tanstack/react-query';

import { BaseError } from '../../types';
import {
  GetMyShopInfoResponse,
  GroomerAndShopProfileResponse,
  PutShopImageResponse,
} from '../../types/my';
import { UseQueryProps } from '../../types/tanstack';
import { getGroomerInfo, getMyShopInfo } from '../my';

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
export const UseGetMyShopInfo = ({ queryKey, options }: UseGetMyShopInfo) => {
  return useQuery({
    queryKey: ['getMyShopInfo', ...(queryKey || [])],
    queryFn: () => getMyShopInfo(),
    ...options,
  });
};

export const UsePutShopImage = () => {
  return useMutation<PutShopImageResponse['response'], Error, FormData>({
    mutationFn: (formData: FormData) => putShopImage(formData),
    onError: (error) => {
      console.error(error);
      alert('샵 사진 등록에 실패했습니다.');
    },
  });
};
