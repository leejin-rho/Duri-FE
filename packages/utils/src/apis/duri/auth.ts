import { BASE_URL_AUTH, duriInstance, NaverLoginResponse } from "@duri-fe/utils";

/** 네이버 소셜 로그인 하이퍼링크 - 리다이렉트 반환 */
export const duriNaverLoginRedirect = () => {
  window.location.href = BASE_URL_AUTH + '/authorization/naver-user';
}

/** 네이버 소셜 로그인 */
export const duriNaverLogin = async (providerId: string): Promise<NaverLoginResponse> => {
  const response = await duriInstance.get('auth/user/token', {
    params: {
      providerId
    }
  });
  return response.data.response;
}