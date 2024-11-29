import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Onboarding from '@duri/pages/Onboarding';
import { globalStyle } from '@duri-fe/ui';
import { Global } from '@emotion/react';

import Home from '@pages/Home';

import StartPage from './pages/Onboarding/StartPage';

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/onboarding" element={<StartPage />} />
        <Route path="/onboarding/detail" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;