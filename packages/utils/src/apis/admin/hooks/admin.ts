import { useMutation, useQuery } from '@tanstack/react-query';

import { BaseError } from '../../types';
import {
  AdminRequestAnswerResponse,
  AdminShopsResponse,
} from '../../types/admin';
import { UseMutationProps, UseQueryProps } from '../../types/tanstack';
import {
  getApprovedShopList,
  getRequestShopList,
  postApproveShop,
  postRejectShop,
} from '../admin';

type UseGetAdminShopListProps = UseQueryProps<
  AdminShopsResponse['response'],
  BaseError
>;

export const UseGetRequestShopList = ({
  queryKey,
  options,
}: UseGetAdminShopListProps) => {
  return useQuery({
    queryKey: ['getRequestShopList', ...(queryKey || [])],
    queryFn: () => getRequestShopList(),
    ...options,
  });
};

export const UseGetApprovedShopList = ({
  queryKey,
  options,
}: UseGetAdminShopListProps) => {
  return useQuery({
    queryKey: ['getApprovedShopList', ...(queryKey || [])],
    queryFn: () => getApprovedShopList(),
    ...options,
  });
};

type UsePostAdminRequestProps = UseMutationProps<
  AdminRequestAnswerResponse['response'],
  BaseError,
  { shopId: number }
>;

export const UsePostApproveRequest = ({
  mutationKey,
  options,
}: UsePostAdminRequestProps) => {
  return useMutation<
    AdminRequestAnswerResponse['response'],
    BaseError,
    { shopId: number }
  >({
    mutationKey: ['postApproveShop', ...(mutationKey || [])],
    mutationFn: ({ shopId }: { shopId: number }) => postApproveShop({ shopId }),
    ...options,
  });
};

export const UsePostRejectRequest = ({
  mutationKey,
  options,
}: UsePostAdminRequestProps) => {
  return useMutation<
    AdminRequestAnswerResponse['response'],
    BaseError,
    { shopId: number }
  >({
    mutationKey: ['postRejecteShop', ...(mutationKey || [])],
    mutationFn: ({ shopId }: { shopId: number }) => postRejectShop({ shopId }),
    ...options,
  });
};
