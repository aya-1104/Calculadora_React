import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [
      '**/*.stories.js',
      '**/node_modules/**',
      '**/dist/**',
      '**/__tests__/playwright/**'
    ],
    setupFiles: './src/setupTests.js',
    coverage: {
      provider: 'istanbul'
    }
  }
})
