//打包相关配置
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["packages/**/*"],
      outDir: "dist/types",
      tsconfigPath: path.resolve(__dirname, "tsconfig.json"),
    }),
  ],
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

  // 构建配置
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "Prozen",
      fileName: (format) => `prozen.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["react", "react-dom", "styled-components"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    },
  },
});
