module.exports = {
  configureWebpack: (config) => {
    // 1) xserver で確認したい場合
    config.output.publicPath = './'
    // 2) ローカルの環境で確認したい場合
    // const path = require('path')
    // config.output.publicPath = path.resolve(__dirname, 'dist')
  },
  title: "Shin-tech25:Docs",
  description: "Full stack dev",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {text: 'About me', link: 'http://Shin-tech25.com/'},
    ],
    sidebar: 'auto'
  }
}
