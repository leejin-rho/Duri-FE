// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import { globalStyle } from '@duri-fe/ui';
import { Global } from '@emotion/react';

import Home from '@pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Home />
      <div>하이</div>
    </BrowserRouter>
  );
}

export default App;
