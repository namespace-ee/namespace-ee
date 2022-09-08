module.exports = {
  locales: ['et', 'en'],
  sourceLocale: 'et',
  catalogs: [
    {
      path: '<rootDir>/locale/{locale}/messages',
      include: ['<rootDir>/'],
      exclude: ['**/node_modules/**'],
    },
  ],
};
