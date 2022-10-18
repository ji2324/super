const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        'views': '@/views',
        'network': "@/network",
        'router': "@/router",
        'store': "@/store",
        'assets': "@/assets",
        'common': "@/common",
        'components': "@/components",
      }
    }
  }
})
