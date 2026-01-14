import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  // build: {
  //   target: 'es2015',
  //   // emptyOutDir: false,
  //   lib: {
  //     entry: 'src/js/main.js',
  //     name: 'ravejs',
  //     fileName: format => `main.${format}.js`
  //   },
  // },
  plugins: [
    eslint(),
    stylelint(),
  ],
})
