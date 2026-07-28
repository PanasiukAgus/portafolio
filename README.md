# Portafolio — Agustina Panasiuk

Portafolio personal construido con **TanStack Start**, **TanStack Router**, **React 19**, **Tailwind CSS v4** y componentes **shadcn/ui**.

## Stack

- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) (file-based routing)
- React 19 + Vite
- Tailwind CSS v4
- shadcn/ui (estilo "new-york") sobre Radix UI
- React Hook Form + Zod
- TanStack Query

## Desarrollo local

```bash
bun install     # o npm install / pnpm install
bun run dev     # levanta el servidor de desarrollo
bun run build   # build de producción
bun run typecheck
bun run lint
```

## Estructura

```
src/
  routes/          # rutas de TanStack Router (file-based)
    __root.tsx     # layout raíz, no se debe quitar el <Outlet />
    index.tsx      # página principal del portafolio
  components/ui/    # componentes shadcn/ui
  hooks/            # hooks compartidos (use-mobile, etc.)
  lib/              # utilidades (cn, manejo de errores, etc.)
  router.tsx        # creación del router de cliente
  server.ts         # entry point del servidor
  start.ts          # configuración de arranque de TanStack Start
  styles.css        # tema de Tailwind (variables oklch)
```

`src/routeTree.gen.ts` es autogenerado por TanStack Router — no editar a mano.

---

## Nota sobre esta reorganización

Este repositorio se recibió con un problema estructural grave: **el contenido
de cada archivo estaba desplazado respecto de su nombre real** (p. ej. el
archivo llamado `button.tsx` contenía en realidad el código de `avatar.tsx`,
`tsconfig.json` contenía el `bun.lock` real, etc.), además de archivos sueltos
sin carpetas, nombres genéricos de descarga (`download`, `download (1)`,
`download (2)`) y un README duplicado.

Se reconstruyó la identidad real de los 65 archivos comparando el contenido
de cada uno (imports, componentes exportados, mensajes de error, etc.) y se
reorganizó todo bajo la estructura estándar de un proyecto TanStack Start.

**`package.json`, `tsconfig.json` y `vite.config.ts` no existían en ninguna
forma dentro del repo** (ni siquiera con nombre incorrecto) — se
reconstruyeron desde cero usando la lista de dependencias real encontrada
dentro del `bun.lock`. Conviene revisarlos bien antes de confiar en ellos al 100%.

También falta `public/favicon.ico` con contenido binario real (el archivo que
existía con ese nombre en el repo original no contenía un ícono, sino código
fuente de `eslint.config.js`) — hay que volver a subirlo.

### Limpieza adicional

Se quitó toda dependencia e integración con la herramienta con la que se
generó originalmente el proyecto:

- Se eliminó la dependencia de desarrollo asociada del `package.json` y las
  exclusiones correspondientes del `bunfig.toml`.
- Se borró `bun.lock` (quedaba con esa dependencia adentro); se regenera
  limpio corriendo `bun install` / `npm install`.
- Se reemplazó el logger de errores externo por
  `src/lib/error-reporting.ts`, uno genérico que solo hace `console.error`
  (sin hooks de ventana ni servicios externos).
- Se sacaron los meta tags `twitter:site` y las imágenes `og:image` /
  `twitter:image` que apuntaban a un preview generado por la herramienta
  original. Falta agregar una imagen de preview propia si se quiere
  compartir el link en redes.
