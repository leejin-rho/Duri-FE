import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@salon', replacement: '/src' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@components', replacement: '/src/components' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@mocks', replacement: '/src/mocks' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@types', replacement: '/src/types' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@stores', replacement: '/src/stores' },
    ],
  },
  server: {
    port: 3001,
  },
});
