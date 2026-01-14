import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry: 'src/main.js',
      name: 'ravejs',
      formats: ['iife'],
      // fileName: format => `main.${format}.js`,
      fileName: format => 'main.js',
      cssFileName: 'main',
    },
  },
  plugins: [
    eslint(),
    stylelint(),
  ],
})
