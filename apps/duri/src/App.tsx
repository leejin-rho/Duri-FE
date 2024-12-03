import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Onboarding from '@duri/pages/Onboarding';
import { globalStyle } from '@duri-fe/ui';
import { Global } from '@emotion/react';

import Home from '@pages/Home';
import LoginPage from '@pages/Login';
import StartPage from '@pages/Onboarding/StartPage';
import PaymentPage from '@pages/PaymentPage';
import FailPage from '@pages/PaymentPage/Fail';
import SuccessPage from '@pages/PaymentPage/Success';

import Shop from './pages/Shop';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/onboarding" element={<StartPage />} />
        <Route path="/onboarding/detail" element={<Onboarding />} />
        <Route path="/payment/:quotationId" element={<PaymentPage />} />
        <Route path="/payment/success" element={<SuccessPage />} />
        <Route path="/payment/fail" element={<FailPage />} />

        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
