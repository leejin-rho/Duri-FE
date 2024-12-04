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