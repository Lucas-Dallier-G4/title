import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: "src", // Diretório de origem para os tipos
      outputDir: "dist/types", // Diretório de saída dos tipos
      insertTypesEntry: true, // Cria uma entrada `types` no package.json automaticamente
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // Arquivo de entrada principal
      name: "SharedDS",
      fileName: (format) => `shared-ds.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Exclua dependências externas
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    outDir: "dist", // Diretório de saída
  },
});
