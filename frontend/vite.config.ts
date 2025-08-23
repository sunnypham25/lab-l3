

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // your current port
    proxy: {
      // Proxy Socket.IO polling + WS upgrades
      '/socket.io': {
        target: 'https://messagebox.babbage.systems',
        changeOrigin: true,
        secure: true,
        ws: true,
      },
      // (Optional) proxy REST calls through /api/* if your client uses HTTP endpoints too
      '/api': {
        target: 'https://messagebox.babbage.systems',
        changeOrigin: true,
        secure: true,
        rewrite: p => p.replace(/^\/api/, ''),
      },
    },
  },
})
