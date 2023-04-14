// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     include: ["react-quill"],
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react-quill"],
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
    outDir: "build",
    emptyOutDir: true,
    webpack: {
      config: require("./webpack.config.js"),
    },
  },
});
