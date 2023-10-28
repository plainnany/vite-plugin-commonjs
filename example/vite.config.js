import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import commonjs from "../dist/index";

export default defineConfig({
  server: {
    port: "8080",
  },
  resolve: {
    extensions: ['.js', '.vue', '.ts']
  },
  plugins: [createVuePlugin(), commonjs()],
});
