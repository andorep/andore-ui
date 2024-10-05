import createMDX from "@next/mdx";
import rehypePrismTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: isProd ? "export" : undefined,
  basePath: isProd ? "/andore-ui" : "",
  assetPrefix: isProd ? "/andore-ui" : "",
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypePrismTitles, rehypePrism, remarkGfm],
  },
  // Apply the configuration for all files, including pages
  // This ensures that it applies not only for imports but also for pages.
  experimental: {
    mdxRs: true, // This ensures proper handling of MDX files, especially in newer Next.js versions
  },
});
// Merge MDX config with Next.js config
export default withMDX(nextConfig);
