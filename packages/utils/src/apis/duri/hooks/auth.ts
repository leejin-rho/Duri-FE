import { duriNaverLogin, NaverLoginRequest } from "@duri-fe/utils";
import { useQuery } from "@tanstack/react-query";

/** 고객 네이버 소셜 로그인 hook */
export const useDuriNaverLogin = ({ code, state }: NaverLoginRequest) => {
  const { data, error, isSuccess, refetch: triggerLogin } = useQuery({
    queryKey: ['duriNaverLogin'],
    queryFn: () => duriNaverLogin({ code, state }),
    enabled: true,
    staleTime: Infinity,
  })

  if (error) {
    window.alert('로그인에 실패했습니다.');
  }

  if (isSuccess) {
    console.log(data);
    // localStorage.setItem('token', data.token);
    // window.location.href = '/';
  }

  return { data, error, triggerLogin };
};