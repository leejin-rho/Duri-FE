// vite.config.ts
import react from "file:///Users/binary_ro/Documents/Github/Duri-FE/.yarn/__virtual__/@vitejs-plugin-react-virtual-4e7212b94d/4/.yarn/berry/cache/@vitejs-plugin-react-npm-4.3.4-e5f654de44-10c0.zip/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///Users/binary_ro/Documents/Github/Duri-FE/.yarn/__virtual__/vite-virtual-4c119f49ef/4/.yarn/berry/cache/vite-npm-5.4.11-9da365ef2b-10c0.zip/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@salon", replacement: "/src" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@components", replacement: "/src/components" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@mocks", replacement: "/src/mocks" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@types", replacement: "/src/types" },
      { find: "@hooks", replacement: "/src/hooks" }
    ]
  },
  server: {
    port: 3001,
    proxy: {
      "/naver-api": {
        target: "https://naveropenapi.apigw.ntruss.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/naver-api/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYmluYXJ5X3JvL0RvY3VtZW50cy9HaXRodWIvRHVyaS1GRS9hcHBzL3NhbG9uXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYmluYXJ5X3JvL0RvY3VtZW50cy9HaXRodWIvRHVyaS1GRS9hcHBzL3NhbG9uL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9iaW5hcnlfcm8vRG9jdW1lbnRzL0dpdGh1Yi9EdXJpLUZFL2FwcHMvc2Fsb24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7IGZpbmQ6ICdAc2Fsb24nLCByZXBsYWNlbWVudDogJy9zcmMnIH0sXG4gICAgICB7IGZpbmQ6ICdAcGFnZXMnLCByZXBsYWNlbWVudDogJy9zcmMvcGFnZXMnIH0sXG4gICAgICB7IGZpbmQ6ICdAY29tcG9uZW50cycsIHJlcGxhY2VtZW50OiAnL3NyYy9jb21wb25lbnRzJyB9LFxuICAgICAgeyBmaW5kOiAnQHN0eWxlcycsIHJlcGxhY2VtZW50OiAnL3NyYy9zdHlsZXMnIH0sXG4gICAgICB7IGZpbmQ6ICdAYXNzZXRzJywgcmVwbGFjZW1lbnQ6ICcvc3JjL2Fzc2V0cycgfSxcbiAgICAgIHsgZmluZDogJ0Btb2NrcycsIHJlcGxhY2VtZW50OiAnL3NyYy9tb2NrcycgfSxcbiAgICAgIHsgZmluZDogJ0B1dGlscycsIHJlcGxhY2VtZW50OiAnL3NyYy91dGlscycgfSxcbiAgICAgIHsgZmluZDogJ0B0eXBlcycsIHJlcGxhY2VtZW50OiAnL3NyYy90eXBlcycgfSxcbiAgICAgIHsgZmluZDogJ0Bob29rcycsIHJlcGxhY2VtZW50OiAnL3NyYy9ob29rcycgfSxcbiAgICBdLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAxLFxuICAgIHByb3h5OiB7XG4gICAgICAnL25hdmVyLWFwaSc6IHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cHM6Ly9uYXZlcm9wZW5hcGkuYXBpZ3cubnRydXNzLmNvbScsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL25hdmVyLWFwaS8sICcnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4VSxPQUFPLFdBQVc7QUFDaFcsU0FBUyxvQkFBb0I7QUFFN0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEVBQUUsTUFBTSxVQUFVLGFBQWEsT0FBTztBQUFBLE1BQ3RDLEVBQUUsTUFBTSxVQUFVLGFBQWEsYUFBYTtBQUFBLE1BQzVDLEVBQUUsTUFBTSxlQUFlLGFBQWEsa0JBQWtCO0FBQUEsTUFDdEQsRUFBRSxNQUFNLFdBQVcsYUFBYSxjQUFjO0FBQUEsTUFDOUMsRUFBRSxNQUFNLFdBQVcsYUFBYSxjQUFjO0FBQUEsTUFDOUMsRUFBRSxNQUFNLFVBQVUsYUFBYSxhQUFhO0FBQUEsTUFDNUMsRUFBRSxNQUFNLFVBQVUsYUFBYSxhQUFhO0FBQUEsTUFDNUMsRUFBRSxNQUFNLFVBQVUsYUFBYSxhQUFhO0FBQUEsTUFDNUMsRUFBRSxNQUFNLFVBQVUsYUFBYSxhQUFhO0FBQUEsSUFDOUM7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxjQUFjO0FBQUEsUUFDWixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsZ0JBQWdCLEVBQUU7QUFBQSxNQUNwRDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
