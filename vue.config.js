module.exports = {
  publicPath: '/About-Me/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/sass/_variables.sass";'
      }
    }
  },
}