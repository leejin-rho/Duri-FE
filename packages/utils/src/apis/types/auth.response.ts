export interface NaverLoginResponse {
  client: "authorization_user" | "authorization_shop";
  token: string;
  newUser: boolean;
}
