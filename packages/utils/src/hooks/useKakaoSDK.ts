import { useEffect } from 'react';

export interface Kakao {
  isInitialized(): boolean;
  init(key: string | undefined): void;
  Auth: {
    authorize(options: { redirectUri: string }): void;
  };
}

/** 카카오 SDK 초기화 */
export const useKakaoSDK = () => {
  useEffect(() => {
    const kakaoSDKKey = import.meta.env.VITE_KAKAO_SDK_KEY || '';

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(kakaoSDKKey);
    }
  });
};
