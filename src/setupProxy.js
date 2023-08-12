// const { createProxyMiddleware } = require('http-proxy-middleware');
import { createProxyMiddleware } from "http-proxy-middleware"

// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://your-api-url.com',
//       changeOrigin: true,
//       onProxyRes: function(proxyRes, req, res) {
//         delete proxyRes.headers['x-powered-by'];
//       }
//     })
//   );
// };


export const app =()=>{
    app.use(
        '/http://localhost:8000',
        createProxyMiddleware({
          target: 'http://127.0.0.1:5173',
          changeOrigin: true,
          onProxyRes: function(proxyRes, req, res) {
            delete proxyRes.headers['x-powered-by'];
          }
        })
      );
}