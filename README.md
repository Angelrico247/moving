# MovIng · Mudanzas en Guadalajara

Landing de mudanzas por horas en Guadalajara. Front-only (sin backend): el formulario de cotización arma un mensaje y abre WhatsApp.

**Sitio en producción:** https://angelrico247.github.io/moving/

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS v4 (config CSS-first en `app/globals.css`)
- TypeScript
- pnpm

## Desarrollo local

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build y despliegue

El sitio se exporta como estático (`output: "export"` en `next.config.ts`) y se publica en GitHub Pages vía el workflow `.github/workflows/deploy.yml`, que corre en cada push a `main`.

```bash
pnpm build
```

Genera la carpeta `out/` lista para servirse de forma estática.
