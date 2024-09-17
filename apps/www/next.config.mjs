import createMDX from '@next/mdx'
import rehypePrismTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    output: 'export',
    basePath: isProd?'/material-tailwind-ui' : '',
    assetPrefix: isProd?'/material-tailwind-ui' : '',
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: [],
        rehypePlugins: [rehypePrismTitles,rehypePrism],
    },
})
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
