import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build : {
    sourcemap: false,
  },
  esbuild: {
    minify: true, // 개발 시에도 코드 난독화
  },
  server: {
    allowedHosts: ['teachmon.kro.kr', 'teachers.kro.kr', 'teachmon-test.kro.kr'],
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api': {
        // 서버 url 삽입필요
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});

//
//https://teachmon.kro.kr