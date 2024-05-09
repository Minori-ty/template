const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack').default
const Componet = require('unplugin-vue-components/webpack').default
const { EsbuildPlugin } = require('esbuild-loader')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()

module.exports = smp.wrap({
    cache: {
        type: 'filesystem',
        allowCollectingMemory: true,
    },
    plugins: [
        new MomentLocalesPlugin({
            // 剥离除 “zh-cn” 以外的所有语言环境。
            localesToKeep: ['zh-cn', 'es'],
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Componet({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve('src'),
                use: [
                    {
                        loader: 'swc-loader',
                    },
                ],
            },
        ],
    },
})
