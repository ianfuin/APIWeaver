import path from 'node:path'

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    outDir:path.join(__dirname,'../main/static')
  },
  plugins: [react()],
});
