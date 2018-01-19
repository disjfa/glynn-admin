var Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('site/build/')
  .setPublicPath('/glynn-admin/build')
  .addEntry('glynn-admin', './js/glynn-admin.js')
  .setManifestKeyPrefix('build/')
  .enableSassLoader()
  .autoProvidejQuery()
  .enableSourceMaps(!Encore.isProduction())
  .cleanupOutputBeforeBuild()
;

module.exports = Encore.getWebpackConfig();
