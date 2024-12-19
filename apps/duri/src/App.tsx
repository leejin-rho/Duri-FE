import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthPage from '@duri/pages/Auth';
import Home from '@duri/pages/Home';
import MyPetPage from '@duri/pages/My/MyPet';
import Onboarding from '@duri/pages/Onboarding';
import { globalStyle } from '@duri-fe/ui';
import { Global } from '@emotion/react';

import PetDiary from '@pages/Diary';
import PetDiaryDetail from '@pages/Diary/DiaryDetail';
import DooriAI from '@pages/DooriAI';
import DooriAIResult from '@pages/DooriAI/AIResult';
import AIStyling from '@pages/DooriAI/AIStyling';
import LoginPage from '@pages/Login';
import MyPage from '@pages/My';
import MyHistoryPage from '@pages/My/MyHistory';
import MyInfoModifyPage from '@pages/My/MyInfoModify';
import MyPetModifyPage from '@pages/My/MyPetModify';
import MyReviewPage from '@pages/My/MyReview';
import MyReviewDetailPage from '@pages/My/MyReviewDetail';
import MyShopPage from '@pages/My/MyShop';
import StartPage from '@pages/Onboarding/StartPage';
import PaymentPage from '@pages/Payment';
import FailPage from '@pages/Payment/Fail';
import SuccessPage from '@pages/Payment/Success';
import QuotationPage from '@pages/Quotation';
import QuotationDetailPage from '@pages/Quotation/QuotationDetail';
import RequestPage from '@pages/Request';
import ReviewWritePage from '@pages/Review';
import ReviewModifyPage from '@pages/Review/ReviewModify';
import Shop from '@pages/Shop';
import Portfolio from '@pages/Shop/Portfolio';
import PortfolioDetail from '@pages/Shop/PortfolioDetail';

import PrivateRoute from '@components/PrivateRoute';

import 'react-spring-bottom-sheet/dist/style.css';

import MyPetRegisterPage from './pages/My/MyPetRegister';
import ShopDetail from './pages/Shop/ShopDetail';

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth" element={<AuthPage />} />

        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:shopId" element={<ShopDetail />} />

        <Route path="/ai" element={<DooriAI />} />
        <Route path="/ai/styling" element={<AIStyling />} />
        <Route path="/ai/result" element={<DooriAIResult />} />

        <Route path="/portfolio/:designerId" element={<Portfolio />} />
        <Route
          path="/portfolio/:designerId/:portfolioId"
          element={<PortfolioDetail />}
        />

        <Route element={<PrivateRoute />}>
          <Route path="/onboarding" element={<StartPage />} />
          <Route path="/onboarding/detail" element={<Onboarding />} />

          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment/success" element={<SuccessPage />} />
          <Route path="/payment/fail" element={<FailPage />} />

          <Route path="/shop/request" element={<RequestPage />} />

          <Route path="/my" element={<MyPage />} />
          <Route path="/my/pet" element={<MyPetPage />} />
          <Route path="/my/pet/modify" element={<MyPetModifyPage />} />
          <Route path="/my/pet/register" element={<MyPetRegisterPage />} />
          <Route path="/my/info" element={<MyInfoModifyPage />} />
          <Route path="/my/shop" element={<MyShopPage />} />
          <Route path="/my/history" element={<MyHistoryPage />} />
          <Route path="/my/review" element={<MyReviewPage />} />
          <Route path="/my/review/:reviewId" element={<MyReviewDetailPage />} />
          <Route path="/my/review/write" element={<ReviewWritePage />} />
          <Route path="/my/review/modify" element={<ReviewModifyPage />} />

          <Route path="/quotation" element={<QuotationPage />} />
          <Route
            path="/quotation/:quotationReqId"
            element={<QuotationDetailPage />}
          />

          <Route path="/diary" element={<PetDiary />} />
          <Route path="/diary/:diaryId" element={<PetDiaryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
