import { createRoot } from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// import { worker } from './mocks/browser';
import App from './App';
import { enableMocking } from './mocks';

// const rootElement = document.getElementById('app');
const queryClient = new QueryClient();

enableMocking().then(() => {
  createRoot(document.getElementById('app')!).render(
    <QueryClientProvider client={queryClient}>
      <App />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>,
  );
});
