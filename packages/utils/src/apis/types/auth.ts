// import { BaseResponse } from "./base";

// export interface NaverLoginResponse extends BaseResponse {
//   response: {
//     client: "authorization_user" | "authorization_shop";
//     token: string;
//     newUser: boolean;
//   }
// }

export interface NaverLoginResponse {
  client: "authorization_user" | "authorization_shop";
  token: string;
  newUser: boolean;
}

export interface KakaoTokenResponse {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope?: string;
}

export interface NaverLoginSDKRequest {
  clientId: string;
  callbackUrl: string;
  onSuccess: (token: string) => void;
  onFailure: (message: string) => void;
}