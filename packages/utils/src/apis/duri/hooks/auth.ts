import { useEffect } from "react";

import { NaverLoginSDKRequest } from "@duri-fe/utils";

// import { useQuery } from "@tanstack/react-query";

export const useOpenNaverLogin = ({ clientId, callbackUrl, onSuccess, onFailure }: NaverLoginSDKRequest) => {
  useEffect(() => {
    // 네이버 로그인 SDK 스크립트 로드
    const script = document.createElement("script");
    script.src = "https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js";
    script.type = "text/javascript";
    script.charset = "utf-8";
    document.body.appendChild(script);

    script.onload = () => {
      // SDK 초기화
      const naverLogin = new window.naver_id_login(clientId, callbackUrl);
      const state = naverLogin.getUniqState();

      naverLogin.setButton("white", 2, 40);
      naverLogin.setState(state);
      naverLogin.setPopup();
      naverLogin.init_naver_id_login();

      // 성공/실패 콜백 처리
      if (window.opener) {
        const token = naverLogin.oauthParams.access_token;
        if (token) {
          onSuccess(token);
        } else {
          onFailure("로그인 실패");
        }
        window.close();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [clientId, callbackUrl, onSuccess, onFailure]);
};

/** 고객 네이버 소셜 로그인 hook */
// export const useDuriNaverLogin = () => {
//   const { data, error, isSuccess, refetch: triggerLogin } = useQuery({
//     queryKey: ['duriNaverLogin'],
//     queryFn: () => duriNaverLogin(),
//     enabled: true,
//     staleTime: Infinity,
//   })

//   if (error) {
//     window.alert('로그인에 실패했습니다.');
//   }

//   if (isSuccess) {
//     console.log(data);
//     // localStorage.setItem('token', data.token);
//     // window.location.href = '/';
//   }

//   return { data, error, triggerLogin };
// };