import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
  },
  resolve: {
    alias: {
      "@minecraft/server": path.resolve(
        __dirname,
        "__mocks__/@minecraft/server.ts",
      ),
      // "@minecraft/server-ui": path.resolve(__dirname, "__mocks__/@minecraft/server-ui.ts"),
    },
  },
});
