import { authInstance, callbackInstance, NaverLoginRequest, NaverLoginResponse, useIsMobile } from "@duri-fe/utils";

export const DURI_KAKAO_REDIRECT_URI = import.meta.env.VITE_DURI_KAKAO_REDIRECT_URI || 'http://localhost:3000/auth/callback';
export const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID || '';
export const KAKAO_SDK_KEY = import.meta.env.VITE_KAKAO_SDK_KEY || '';

/** 카카오 소셜 로그인 - 리다이렉트 반환 */
export const duriKakaoLogin = async () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    window.Kakao.Auth.authorize({
      redirectUri: DURI_KAKAO_REDIRECT_URI,
    })
  } else {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${DURI_KAKAO_REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  }
}

/** 카카오 소셜 로그인 - 토큰 발급 */


/** 카카오 소셜 로그인 - 토큰 전송 */

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