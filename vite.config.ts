import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // Default config
  const config = {
    plugins: [react()],
    server: {
      port: 5173, // Default fallback port
    }
  };

  // Only use the VITE_PORT from .env if we are in development mode
  if (mode === 'development') {
    config.server.port = parseInt(env.VITE_PORT) || 5173;
    console.log(`🚀 Running in DEVELOPMENT on port: ${config.server.port}`);
  }

  return config;
});
