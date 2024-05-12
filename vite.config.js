import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

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
            fonts: '/src/fonts',
            styles: '/src/styles',
            routes: '/src/routes',
        },
    },
});
