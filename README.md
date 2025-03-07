# Figma SDS design system with a touch of One North!

### Short Description

Figma originally created a design system in react, leveraging code connect to map back to the design file in Figma. One North has turned this project into a monorepo built with Lerna x Stencil. We extracted these base components into web components using Stencil, and then generated target outputs in `React`, `Vue`, and `Angular`. These output targets are all featured within Code Connect, allowing developers and designers to bridge the gap across their design system, no matter the framework!

In theory, a practical application of this will allow for a Company with a large scale design system, to bride the gap across multiple teams, working in multiple different frameworks. One source of truth, accessible for designers and developers alike!

## Structure:

root/

- packages/

  - sds-web-components (Source of truth)
  - sds-vue-components (Vue output target)
  - sds-react-components (React output target)
  - sds-angular-components (Angular output target)
  - sds-figma-code-connect (logic to handle code connect across the different output targets)

- example-apps/
  - (mock example repo's, importing the associated output as if it was a packaged application)
  - sds-example-angular
  - sds-example-react
  - sds-example-vue
  - sds-example-web

## Getting Started

From root level:

### To install all dependencies in all packages, run

```bash
npm i
```

---

### To build the project, run:

```bash
npm run build
```

#### Building the project will do a number of things

1. First it will generate build `sds-web-components`, which is our source of truth. Upon building, Stencil will generate the necessary files within the output targets. Once `sds-web-components` has built, all other output target projects will now be able to be built.
2. Next, it will build `sds-vue-components`
3. Then `sds-angular-components` will be built
4. Then `sds-react-components` will be built
5. And lastly, `sds-figma-code-connect` will be built

---

## Steps to test!

After building the project, navigate to `example-apps`, and choose any app you'd like. Ensure that you've `npm i`'d, and then run `npm run dev`. Feel free to inspect package.json to check on the exact script to run.
