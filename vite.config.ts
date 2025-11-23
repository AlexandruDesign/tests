import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/tests/', // înlocuiește cu NUMELE REPO-ULUI TĂU
})