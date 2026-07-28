import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// NOTA: este archivo no estaba presente en el repositorio original (ni un
// solo archivo del repo contenía su configuración real). Fue reconstruido
// a partir de las dependencias declaradas en bun.lock (@tanstack/react-start,
// @tailwindcss/vite, vite-tsconfig-paths, @vitejs/plugin-react). Revisar y
// ajustar según la config real del proyecto si difiere.
export default defineConfig({
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
});
