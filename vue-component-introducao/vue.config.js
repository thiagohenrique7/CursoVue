const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  runtimeCompiler: process.env.NODE_ENV !== 'production',
  transpileDependencies: true
})
