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
      {/* <Routes>
        <Route path="/payment" element={<Payment />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;