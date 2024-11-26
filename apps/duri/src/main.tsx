import { createRoot } from 'react-dom/client';

// import { worker } from './mocks/browser';
import App from './App';
import { enableMocking } from './mocks';

// const rootElement = document.getElementById('app');

enableMocking().then(() => {
  createRoot(document.getElementById('app')!).render(<App />);
});
