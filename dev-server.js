const koa = require('koa')
const mount = require('koa-mount')
const webpack = require('webpack')
const webpackDevMiddleware = require('koa-webpack-dev-middleware')

const config = require('./webpack.config.babel')

const app = koa()
const port = process.env.PORT || 3000

app.use(mount('/static', webpackDevMiddleware(webpack(config))))

app.listen(port)
console.log(`Listening on port ${port}...`)
