const { defineConfig } = require('@vue/cli-service')
const Dotenv = require('dotenv-webpack')

module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: 'http://localhost:8080/',
        https: false,
    },
})

// module.exports = {
//     configureWebpack: {
//         plugins: [new Dotenv()],
//     },
// }
