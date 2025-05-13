import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  server: {
    host: true,     // 👈 Esto permite que sea accesible en la red local (0.0.0.0)
    port: 3000,     // 👈 Corre en el puerto 3000
  }
});