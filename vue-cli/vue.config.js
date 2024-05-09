const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    configureWebpack: require('./webpack.config.cjs'),
})
