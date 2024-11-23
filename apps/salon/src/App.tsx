import { Global } from '@emotion/react';
import { globalStyle } from '@duri-fe/ui';
import Home from '@pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

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
