import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      port: 8081,
      open: true,
    },
    base:
      mode === "production"
        ? loadEnv("production", process.cwd()).VITE_BASE_URL
        : "",
    plugins: [
      vue(),
      vueJsx(),
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          additionalData:
            '@import "node_modules/ant-design-vue/dist/antd.less";',
          modifyVars: {
            "ant-prefix": "mav3",
          },
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
