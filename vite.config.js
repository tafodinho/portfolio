import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     {
//       name: 'typescript',
//       enableJsx: true,
//     }
//   ],
// })

import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [
    react(),
    reactRefresh()
  ],
  build: {
    minify: false,
    target: 'es2015'
  },
  esbuild: {
  }
})