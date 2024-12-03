import { useQuery } from "@tanstack/react-query";

import { duriNaverLogin } from "../auth";

/** 고객 네이버 소셜 로그인 hook */
export const useDuriNaverLogin = () => {
  const { data, error, refetch: triggerLogin } = useQuery({
    queryKey: ['duriNaverLogin'],
    queryFn: duriNaverLogin,
    enabled: false,
    staleTime: Infinity,
  })

  return { data, error, triggerLogin };
};