const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/GestorTareas/' // Asegúrate de que "GestorTareas" sea el nombre exacto de tu repositorio.
    : '/'
});
