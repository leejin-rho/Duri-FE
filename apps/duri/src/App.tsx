import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthPage from '@duri/pages/Auth';
import Onboarding from '@duri/pages/Onboarding';
import { globalStyle } from '@duri-fe/ui';
import { Global } from '@emotion/react';

import Home from '@pages/Home';
import LoginPage from '@pages/Login';
import StartPage from '@pages/Onboarding/StartPage';
import PaymentPage from '@pages/Payment';
import FailPage from '@pages/Payment/Fail';
import SuccessPage from '@pages/Payment/Success';
import QuotationPage from '@pages/Quotation';
import RequestPage from '@pages/Request';
import Shop from '@pages/Shop';

import QuotationDetailPage from './pages/QuotationDetail';

import Portfolio from './pages/Shop/Portfolio';
import ShopDetail from './pages/Shop/ShopDetail';

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth" element={<AuthPage />} />

        <Route path="/onboarding" element={<StartPage />} />
        <Route path="/onboarding/detail" element={<Onboarding />} />

        <Route path="/payment/:quotationId" element={<PaymentPage />} />
        <Route path="/payment/success" element={<SuccessPage />} />
        <Route path="/payment/fail" element={<FailPage />} />
        <Route path="/shop/request" element={<RequestPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:shopId" element={<ShopDetail />} />
        <Route path="/portfolio/:designerId" element={<Portfolio />} />

        <Route path="/quotation" element={<QuotationPage />} />
        <Route path="/quotation/:quotationId" element={<QuotationDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
