module.exports = {
  locales: ['et', 'en'],
  sourceLocale: 'en',
  catalogs: [
    {
      path: '<rootDir>/locale/{locale}/messages',
      include: ['<rootDir>/'],
      exclude: ['**/node_modules/**'],
    },
  ],
};
