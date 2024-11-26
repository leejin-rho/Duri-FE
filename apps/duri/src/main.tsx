import { createRoot } from 'react-dom/client';

import { enableMocking } from '@mocks';

// import { worker } from './mocks/browser';
import App from './App';

// const rootElement = document.getElementById('app');

enableMocking().then(() => {
  createRoot(document.getElementById('app')!).render(<App />);
});
