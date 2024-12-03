/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER_API: string;
  readonly VITE_SERVER_AUTH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}