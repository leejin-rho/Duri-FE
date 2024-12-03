import { authInstance, NaverLoginResponse } from "@duri-fe/utils";

/** 네이버 소셜 로그인 */
export const duriNaverLogin = async (): Promise<NaverLoginResponse> => {
  const response = await authInstance.get('authorization/naver-user');
  console.log(response);
  return response.data;
}