const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'

console.log('NODE_ENV: ', process.env.NODE_ENV)

// cssLoader
const getCssLoader = (name) => {
  const loaders = [{
      loader: !isProd ? 'style-loader' : MiniCssExtractPlugin.loader
    }, // 将 JS 字符串生成为 style 节点
    {
      loader: 'css-loader'
    }, // 将 CSS 转化成 CommonJS 模块
    {
      loader: 'postcss-loader',
      options: {
        plugins: () => [
          require('autoprefixer')({
            'browsers': ['> 1%', 'last 2 versions']
          })
        ],
      }
    },
  ]
  if (name) loaders.push({
    loader: `${name}-loader` // 将 Sass 编译成 CSS
  })

  return loaders
}

module.exports = {
  lessLoader: getCssLoader('less'),
  sassLoader: getCssLoader('sass'),
  cssLoader: getCssLoader()
}