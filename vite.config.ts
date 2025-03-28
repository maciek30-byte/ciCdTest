import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,          // umożliwia używanie describe/it/expect bez importu
    environment: 'jsdom',   // środowisko testowe (przeglądarkowe)
    setupFiles: './src/test/setup.ts',  // plik z konfiguracją (opcjonalnie)
    coverage: {
      provider: 'v8',       // engine pokrycia kodu
      reporter: ['text', 'json', 'html'],
    },
  },
});