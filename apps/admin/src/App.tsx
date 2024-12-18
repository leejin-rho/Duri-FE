import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { globalStyle } from '@duri-fe/ui';
import { Global } from '@emotion/react';

import Home from '@pages/Home';

import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
