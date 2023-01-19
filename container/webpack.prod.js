const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const packageJson = require('./package.json')

const domain = process.env.PRODUCTION_DOMAIN
module.exports = () => {
    const prodConfig = {
        mode: 'production',
        output: {
            publicPath: '/',
            filename: '[name].[contenthash].js',
        },

        plugins: [
            new ModuleFederationPlugin({
                name: 'container',
                remotes: {
                    landing: `landing@${domain}/remoteEntry.js`,
                },
                shared: packageJson.dependencies,
            }),
        ],
    }
    return merge(commonConfig, prodConfig)
}
