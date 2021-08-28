import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/App.tsx"),
      name: "ReactApp",
      fileName: (format) => `react-app.${format}.js`,
    },
  },
  plugins: [reactRefresh()],
});
