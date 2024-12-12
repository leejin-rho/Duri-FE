import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthPage from '@duri/pages/Auth';
import MyPetPage from '@duri/pages/My/MyPet';
import Onboarding from '@duri/pages/Onboarding';
import { globalStyle } from '@duri-fe/ui';
import { Global } from '@emotion/react';

import PetDiary from '@pages/Diary';
import PetDiaryDetail from '@pages/Diary/DiaryDetail';
import Home from '@pages/Home';
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
import Shop from '@pages/Shop';
import Portfolio from '@pages/Shop/Portfolio';
import PortfolioDetail from '@pages/Shop/PortfolioDetail';
import ShopDetail from '@pages/Shop/ShopDetail';

import 'react-spring-bottom-sheet/dist/style.css';

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

        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment/success" element={<SuccessPage />} />
        <Route path="/payment/fail" element={<FailPage />} />

        <Route path="/shop/request" element={<RequestPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:shopId" element={<ShopDetail />} />

        <Route path="/portfolio/:designerId" element={<Portfolio />} />
        <Route
          path="/portfolio/:designerId/:portfolioId"
          element={<PortfolioDetail />}
        />

        <Route path="/quotation" element={<QuotationPage />} />
        <Route
          path="/quotation/:quotationId"
          element={<QuotationDetailPage />}
        />

        <Route
          path="/quotation/:quotationId"
          element={<QuotationDetailPage />}
        />

        <Route path="/diary" element={<PetDiary />} />
        <Route path="/diary/:diaryId" element={<PetDiaryDetail />} />

        <Route path="/my" element={<MyPage />} />
        <Route path="/my/pet" element={<MyPetPage />} />
        <Route path="/my/pet/modify" element={<MyPetModifyPage />} />
        <Route path="/my/info" element={<MyInfoModifyPage />} />
        <Route path="/my/shop" element={<MyShopPage />} />
        <Route path="/my/history" element={<MyHistoryPage />} />
        <Route path="/my/review" element={<MyReviewPage />} />
        <Route path="/my/review/:reviewId" element={<MyReviewDetailPage />} />
        <Route path="/my/review/write" element={<ReviewWritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
