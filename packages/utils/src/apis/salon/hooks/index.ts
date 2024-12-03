import { useQuery } from "@tanstack/react-query";

import { salonNaverLogin } from "../auth";

/** 고객 네이버 소셜 로그인 hook */
export const useSalonNaverLogin = () => {
  const { data, isError, error, refetch: triggerLogin } = useQuery({
    queryKey: ['duriNaverLogin'],
    queryFn: salonNaverLogin,
    enabled: false,
    staleTime: Infinity,
  })

  if (isError) {
    window.alert(error);
  }

  if (data) {
    console.log(data);
  }

  return { triggerLogin };
};