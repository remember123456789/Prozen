//打包相关配置
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, "tests"),
  //路径
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "packages"),
    },
  },

  server: {
    port: 3000,
    open: true,
    host: "0.0.0.0",
  },
});
