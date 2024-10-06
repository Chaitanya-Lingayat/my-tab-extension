import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
        scss: {
            silenceDeprecations: ["legacy-js-api"],
            api: 'modern-compiler' // or "modern"
        },
    },
},
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'index.js',
        assetFileNames: 'index.[ext]',
      },
    },
  },
})
