export interface Kakao {
  isInitialized(): boolean;
  init(key: string | undefined): void;
  Auth: {
    authorize(options: { redirectUri: string }): void;
  };
}
