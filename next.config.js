/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  env: {
    TRIRIGA_ENV: process.env.TRIRIGA_ENV,
    ZIPAI_KEY: process.env.ZIPAI_KEY,
  },

  basePath: '/html/en/default/rest/Equilibrium/app/main',
  distDir: 'main',
  pageExtensions: ['html', 'jsx', 'js', 'tsx', 'ts'],
};

module.exports = nextConfig;
