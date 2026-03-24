import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: 'gzip', threshold: 0 }),
    compression({ algorithm: 'brotliCompress', ext: '.br', threshold: 0 }),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.warn'],
        passes: 3,
        unsafe: true,
        unsafe_arrows: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        booleans_as_integers: true,
        collapse_vars: true,
        dead_code: true,
        evaluate: true,
        hoist_funs: true,
        hoist_vars: true,
        if_return: true,
        join_vars: true,
        loops: true,
        negate_iife: true,
        properties: true,
        reduce_vars: true,
        sequences: true,
        side_effects: true,
        toplevel: true,
        typeofs: true,
        unused: true,
      },
      mangle: {
        toplevel: true,
        properties: {
          regex: /^_/,
        },
      },
      format: {
        comments: false,
        ascii_only: true,
        semicolons: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
        compact: true,
        generatedCode: {
          arrowFunctions: true,
          constBindings: true,
          objectShorthand: true,
          reservedNamesAsProps: false,
          symbols: false,
        },
      },
    },
    cssMinify: 'lightningcss',
    reportCompressedSize: true,
    chunkSizeWarningLimit: 9999,
    sourcemap: false,
    assetsInlineLimit: 99999,
  },
})
