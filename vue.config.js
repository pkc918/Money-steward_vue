// 引入 path 模块
const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue_bill-website/'
    : '/',
  lintOnSave: false,
  chainWebpack: config => {
    // icon 存在的目录，__dirname表示当前目录,后面就是具体路径
    const dir = path.resolve(__dirname, 'src/assets/icons')
    // config 就是vue把webpack API封装暴露给我们的一个对象
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end() // 只包含 icons 目录
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({extract: false})
      .end()
      // 防止 svg 有自带fill
      .use('svgo-loader').loader('svgo-loader')
      .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]}))
      .end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons目录
  }
}
