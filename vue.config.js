module.exports = {
  assetsDir: 'static',
  publicPath: '',
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'https:baidu.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}
