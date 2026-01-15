import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  build: {
    emptyOutDir: false,
    target: 'es2015',
    lib: {
      entry: 'src/iife.js',
      name: 'ravejs',
      formats: ['iife'],
      fileName: format => `main.${format}.js`,
      cssFileName: 'main',
    },
  },
  plugins: [
    eslint(),
    stylelint(),
  ],
});
