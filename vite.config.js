import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/datepicker-demo/', // リポジトリ名
  server: {
    port: 3000,
    open: true
  }
})
