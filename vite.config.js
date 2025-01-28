import { resolve } from 'path' 
import { build } from 'vite'

export default {
    // config options
    css: {
        devSourcemap: true
    }, 
    build: {
        rollupOptions: {
            input: resolve(__dirname, 'index.html')
        }
    }
  }