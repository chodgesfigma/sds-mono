# Monorepo built with Lerna, using stencil

## Structure:

root/

- packages
  - sds-web-components (Source of truth)
  - sds-vue-components (Vue output target)
  - sds-react-components (React output target)

## Getting Started

From root level:

run

```bash
npm install
```

to install all dependencies in all packages.

To build the component for production, run:

```bash
npm run build
```
