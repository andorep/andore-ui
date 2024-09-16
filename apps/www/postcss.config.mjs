/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-url": {
      url: (asset) => {
        if (process.env.NODE_ENV === "production") {
          if (asset.url.startsWith("/")) {
            return `/material-tailwind-ui${asset.url}`;
          }
        }
        return asset.url;
      },
    },
  },
};

export default config;
