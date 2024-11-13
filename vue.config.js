const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/GestorTareas/' // Cambia "GestorTareas" por el nombre exacto de tu repositorio.
    : '/'
});
