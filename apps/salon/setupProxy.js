// import createProxyMiddleware from 'http-proxy-middleware';

// module.exports = function(app) {
//   app.use(
//     '/oauth2',
//     createProxyMiddleware({
//       target: "https://nid.naver.com", // 네이버 API 도메인
//       changeOrigin: true, // 대상 서버의 Origin 변경
//       secure: true, // HTTPS 허용
//       pathRewrite: {
//         "^/oauth2": "", // 프록시가 요청 경로를 네이버 API 경로로 변환
//       },
//       onProxyReq: (proxyReq, req, res) => {
//         // 필요 시 요청 헤더 추가/변경
//         proxyReq.setHeader("User-Agent", "Mozilla/5.0");
//       },
//     })
//   );
// }