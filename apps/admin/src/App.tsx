import { Global } from '@emotion/react';
import { globalStyle } from '@duri-fe/ui';
import Home from '@pages/Home';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Home />
      <div>하이</div>
    </>
  );
}

export default App;
