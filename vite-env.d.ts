/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER_API: string;
  readonly VITE_KAKAO_SDK_KEY: string;
  readonly VITE_KAKAO_CLIENT_ID: string;
  readonly VITE_DURI_KAKAO_REDIRECT_URI: string;
  readonly VITE_SALON_KAKAO_REDIRECT_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}