/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

// IMPORTANT: change "ascend" to your actual GitHub repo name
// If hosting at https://username.github.io/ascend → set basePath: '/ascend'
// If hosting at custom domain or username.github.io root → leave empty
const repoName = 'ascend-web';

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
