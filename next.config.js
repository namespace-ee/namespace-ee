const { locales, sourceLocale } = require('./lingui.config.js');

module.exports = {
  i18n: {
    locales,
    defaultLocale: sourceLocale,
    localeDetection: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    // Lingui
    config.module.rules.push({
      test: /\.po/,
      use: [
        {
          loader: '@lingui/loader',
        },
      ],
    });
    return config;
  },
};
