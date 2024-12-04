import { authInstance } from "@duri-fe/utils";

import { NaverLoginResponse } from "../types/auth";

/** 네이버 소셜 로그인 */
export const salonNaverLogin = async (): Promise<NaverLoginResponse> => {
  const response = await authInstance.get('authorization/naver-shop');
  return response.data;
}