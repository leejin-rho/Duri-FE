import { useSearchParams } from "react-router-dom";

import { BASE_URL_CALLBACK } from "@duri-fe/utils";

const AuthPage = () => {
  const [query, ] = useSearchParams();
  const code = query.get('code') || '';
  const state = query.get('state') || '';

  // const { data, error } = useDuriNaverLogin({
  //   code: code, 
  //   state: state
  // });
  
  window.location.href = BASE_URL_CALLBACK + '/naver-user?code=' + code + '&state=' + state;
  
  // useEffect(() => {
  //   duriNaverLogin({ code, state });
  // })

  return (
    <div>
      <h1>Auth Page</h1>
    </div>
  );
}

export default AuthPage;