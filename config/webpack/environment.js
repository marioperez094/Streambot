const { environment } = require('@rails/webpacker')

const path = require('path')

const customConfig = {
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '..', '..', 'app/javascript/src'),
      '@packs': path.resolve(__dirname, '..', '..', 'app/javascript/packs'),
      '@pages': path.resolve(__dirname, '..', '..', 'app/javascript/src/pages'),
      '@components': path.resolve(__dirname, '..', '..', 'app/javascript/src/components'),
    }
  }
}

environment.config.merge(customConfig);

module.exports = environment
