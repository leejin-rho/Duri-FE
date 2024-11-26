import React from 'react';
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
      {/* <Routes>
        <Route path="/payment" element={<Payment />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;