// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { globalStyle } from '@duri-fe/ui';
import { Global } from '@emotion/react';

import AuthPage from '@pages/Auth';
import FeedBackPage from '@pages/Feedback';
import Home from '@pages/Home';
import IncomePage from '@pages/Income/Income';
import LoginPage from '@pages/Login';
import MyPage from '@pages/My';
import GroomerEditPage from '@pages/My/GroomerEdit';
import ReviewPage from '@pages/My/Review';
import MyShopPage from '@pages/My/Shop';
import OnboardingPage from '@pages/Onboarding';
import OnboardingPendingPage from '@pages/Onboarding/Pending';
import StartPage from '@pages/Onboarding/StartPage';
import PortfolioPage from '@pages/Portfolio';
import PortfolioDetailPage from '@pages/Portfolio/PortfolioDetail';
import QuotationPage from '@pages/Quotation';
import ReplyPage from '@pages/Quotation/ReplyPage';
import ReservationPage from '@pages/Quotation/ReservationPage';

import PrivateRoute from '@components/PrivateRoute';

import 'react-spring-bottom-sheet/dist/style.css';

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth" element={<AuthPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<StartPage />} />
          <Route path="/onboarding/detail" element={<OnboardingPage />} />
          <Route
            path="/onboarding/pending"
            element={<OnboardingPendingPage />}
          />

          <Route path="/quotation" element={<QuotationPage />} />
          <Route path="/quotation/reservation" element={<ReservationPage />} />
          <Route path="/quotation/reply/:requestId" element={<ReplyPage />} />

          <Route path="/my" element={<MyPage />} />

          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route
            path="/portfolio/:groomerId/:portfolioId"
            element={<PortfolioDetailPage />}
          />
          <Route path="/my/shop" element={<MyShopPage />} />
          <Route path="/my/review" element={<ReviewPage />} />
          <Route path="/my/groomer/edit" element={<GroomerEditPage />} />

          <Route path="/income" element={<IncomePage />} />
          <Route path="/feedback" element={<FeedBackPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
