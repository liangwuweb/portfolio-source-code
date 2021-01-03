// vue.config.js
module.exports = {
  lintOnSave: true,
  css: {
      loaderOptions: {
        sass: {
            prependData: `
            @import "~@/scss/style.scss";
            `
        }
      }
    }
}