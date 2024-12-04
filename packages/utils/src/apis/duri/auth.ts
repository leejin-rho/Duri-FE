import { authInstance, callbackInstance, NaverLoginRequest, NaverLoginResponse } from "@duri-fe/utils";

/** 네이버 소셜 로그인 - 리다이렉트 반환 */
export const duriNaverLoginRedirect = () => {
  // window.location.href = BASE_URL_AUTH + '/authorization/naver-user';
  try {
    const response = authInstance.get('authorization/naver-user');
    console.log(response);
    
  } catch (error) {
    console.error(error)
  }
}

/** 네이버 소셜 로그인 */
export const duriNaverLogin = async ({ code, state }: NaverLoginRequest): Promise<NaverLoginResponse> => {
  const response = await callbackInstance.get('naver-user', {
    params: {
      code,
      state,
    }
  });
  console.log(response)
  return response.data;
}