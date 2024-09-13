/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    output: 'export',
    basePath: isProd?'/material-tailwind-ui' : '',
    assetPrefix: isProd?'/material-tailwind-ui' : '',
};

export default nextConfig;
