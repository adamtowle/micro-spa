import { defineConfig } from "vite";
import path from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@micro/react-app": path.resolve(__dirname, "../apps/react-app/src"),
    },
  },
  plugins: [reactRefresh()],
});
