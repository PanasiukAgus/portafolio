/**
 * Registro simple de errores no controlados (error boundaries, rutas, etc).
 * Reemplaza cualquier integración externa: hoy solo loguea a consola.
 * Si en el futuro se quiere enviar a un servicio (Sentry, etc.), este es
 * el único lugar que hay que tocar.
 */
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  console.error("[error-boundary]", message, {
    route: window.location.pathname,
    stack: error instanceof Error ? error.stack : undefined,
    ...context,
  });
}
