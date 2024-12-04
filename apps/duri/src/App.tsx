import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthPage from '@duri/pages/Auth/Naver';
import Onboarding from '@duri/pages/Onboarding';
import { globalStyle } from '@duri-fe/ui';
import { useKakaoSDK } from '@duri-fe/utils';
import { Global } from '@emotion/react';

import KakaoAuthPage from '@pages/Auth/Kakao';
import Home from '@pages/Home';
import LoginPage from '@pages/Login';
import StartPage from '@pages/Onboarding/StartPage';
import PaymentPage from '@pages/PaymentPage';
import FailPage from '@pages/PaymentPage/Fail';
import SuccessPage from '@pages/PaymentPage/Success';
import Shop from '@pages/Shop';

function App() {
  useKakaoSDK();
  
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/oauth2/code/naver-user" element={<AuthPage />} />
        <Route path="/auth/callback" element={<KakaoAuthPage />} />

        <Route path="/onboarding" element={<StartPage />} />
        <Route path="/onboarding/detail" element={<Onboarding />} />

        <Route path="/payment/:quotationId" element={<PaymentPage />} />
        <Route path="/payment/success" element={<SuccessPage />} />
        <Route path="/payment/fail" element={<FailPage />} />

        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
