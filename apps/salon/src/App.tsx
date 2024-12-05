// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { globalStyle } from '@duri-fe/ui';
import { Global } from '@emotion/react';

import AuthPage from '@pages/Auth';
import Home from '@pages/Home';
import LoginPage from '@pages/Login';
import OnboardingPage from '@pages/Onboarding';
import StartPage from '@pages/Onboarding/StartPage';

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth" element={<AuthPage />} />

        <Route path="/onboarding" element={<StartPage />} />
        <Route path="/onboarding/detail" element={<OnboardingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
