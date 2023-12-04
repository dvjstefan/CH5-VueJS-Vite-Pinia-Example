import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import { viteSingleFile } from "vite-plugin-singlefile";

// The main configuration export, where you define all Vite-related configurations
// See more: https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Allows for using '@' as a shortcut to the src directory
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Automatically import the _colors.scss file in every single .scss file
        // without needing to manually import it every time
        additionalData: `@import "@/styles/imports/_colors.scss";`
      }
    }
  },
  plugins: [
    vue(), // Use the Vue plugin for processing Vue single-file components
    viteSingleFile() // Use the single-file plugin to bundle the project into a single file
  ],
  base: "./", // Base public path when serving or building the project
})