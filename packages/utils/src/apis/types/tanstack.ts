import { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

export type TanstackKey = string[];

export type UseQueryProps<TQueryFnData = unknown, TError = unknown> = {
  queryKey?: TanstackKey;
  options?: UseQueryOptions<TQueryFnData, TError>;
};

export type UseMutationProps<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown,
> = {
  mutationKey?: TanstackKey;
  options?: UseMutationOptions<TData, TError, TVariables, TContext>;
};
