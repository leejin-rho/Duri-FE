import { useEffect, useState } from "react";

/** 모바일 환경 확인 custom hook */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // user agent, 스크린 너비로 확인
  useEffect(() => {
    const userAgent = /iPhone|iPad|Android/i.test(navigator.userAgent);
    const isMobileScreen = window.innerWidth < 768;
    setIsMobile(userAgent && isMobileScreen);
  }, []);

  return isMobile;
}