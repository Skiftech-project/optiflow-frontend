import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
    ],
    resolve: {
        alias: {
            src: '/src',
            assets: '/src/assets',
            components: '/src/components',
            core: '/src/core',
            styles: '/src/styles',
        },
    },
});
