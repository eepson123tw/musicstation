module.exports = {
  configureWebpack: {
    // 关闭 webpack 的性能提示
    // performance: {
    //   hints: false
    // },
    // 或者
    // 警告 webpack 的性能提示
    performance: {
      hints: 'warning',
      // 入口起点的最大体积
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  },
  devServer: {
    compress: true,
    disableHostCheck: true,
    proxy: {
      // 設定代理
      '/api/*': {
        target: 'https://vue3-course-api.hexschool.io', // 介面的域名
        changeOrigin: true,
        ws: true,
        pathRewrite: { '^/api': '/api' }
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/musicstation/' : '/'

}
