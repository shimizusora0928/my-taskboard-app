import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // ← バックエンドサーバーのURLとポート番号を指定
        changeOrigin: true,
        // リクエスト送信時に '/api' を消去して 'http://localhost:5000/tasks' に転送する
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});