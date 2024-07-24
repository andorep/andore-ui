// index.js
import tailwindPlugin from "tailwindcss/plugin";
import theme from "../theme";

const plugin = tailwindPlugin(() => {}, {
  theme: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    extend: {
      ...theme,
    },
  },
});

export default plugin;
