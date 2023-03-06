import path from 'path';
import { rmSync } from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'
import pkg from './package.json'

export default defineConfig(({ command }) => {
  rmSync('dist-electron', { recursive: true, force: true })

  const isServe = command === 'serve'
  const isBuild = command === 'build'

  return {
    resolve:{
      alias:{
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      vue(),
      electron([
        {
          // Main-Process entry file of the Electron App.
          entry: 'electron/main/index.js',
          // https://github.com/electron-vite/vite-plugin-electron
          vite: {
            build: {
              sourcemap: isServe,
              minify: isBuild,
              outDir: 'dist-electron/main',
              // rollupOptions: {
              //   external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
              // },
            },
          },
        },
        {
          entry: 'electron/preload/index.js',
          onstart(options) {
            // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete, 
            // instead of restarting the entire Electron App.
            options.reload()
          },
          vite: {
            build: {
              sourcemap: isServe ? 'inline' : undefined,
              minify: isBuild,
              outDir: 'dist-electron/preload',
              // rollupOptions: {
              //   external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
              // },
            },
          },
        }
      ]),
      // Use Node.js API in the Renderer-process
      renderer({
        nodeIntegration: true,
      }),
    ],
    clearScreen: false,
  }
})
