// auth.ts
export interface tokenKeyType {
  token: 'authorization_user' | 'authorization_shop';
}

export const checkLocalStorage = (key: tokenKeyType): boolean => {
  const token = localStorage.getItem(key.token); // 토큰 키는 서버/프로젝트에 맞게 수정
  return !!token;
};
