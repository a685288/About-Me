module.exports = {
  publicPath: '/About-Me/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/sass/main.sass";@import "@/assets/sass/_mixin.sass"'
      }
    }
  },
}