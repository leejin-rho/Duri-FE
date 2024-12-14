import { UseQueryOptions } from '@tanstack/react-query';

export type TanstackKey = string[];

export type UseQueryProps<TQueryFnData = unknown, TError = unknown> = {
  queryKey?: TanstackKey;
  options?: UseQueryOptions<TQueryFnData, TError>;
};
