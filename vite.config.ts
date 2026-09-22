import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    sourcemap: false,
    minify: 'esbuild',
  },
  server: {
    port: 5173,
  },
});
