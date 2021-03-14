const { nextI18NextRewrites } = require('next-i18next/rewrites')
const withImages = require('next-images')

const localeSubpaths = {
  es: 'es',
  ch: 'ch',
}

module.exports = withImages({
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  webpack(config, options) {
    return config
  },
})
