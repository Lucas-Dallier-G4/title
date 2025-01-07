import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
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
