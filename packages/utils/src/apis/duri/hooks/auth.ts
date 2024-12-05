import { duriNaverLogin } from "@duri-fe/utils";
import { useQuery } from "@tanstack/react-query";

/** 고객 네이버 소셜 로그인 hook */
export const useDuriNaverLogin = (providerId: string) => {
  const { data, error, isSuccess } = useQuery({
    queryKey: ['duriNaverLogin'],
    queryFn: () => duriNaverLogin(providerId),
    enabled: true,
    staleTime: Infinity,
  })

  return { data, error, isSuccess };
};