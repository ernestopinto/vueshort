const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~bootstrap/scss/bootstrap";`,
        implementation: require('node-sass')
      },
    },
  },
})


