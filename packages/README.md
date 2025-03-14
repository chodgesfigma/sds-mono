# Figma SDS Replatforming - Packages

This directory contains all the core packages for the **Figma SDS Replatforming** project. Each package represents a different framework output target or core functionality within the design system.

---

## **Packages Overview**

### `sds-web-components`

- **Description**: This package contains the **StencilJS**-based Web Components.
- **Technology**: Built with **StencilJS** to generate framework-agnostic web components.
- **Output Targets**:
  - Vue Components (`sds-vue-components`)
  - Angular Components (`sds-angular-components`)
  - React Components (`sds-react-components`)
  - Standalone Web Components (`sds-web-components`)
- **Build Process**: Runs `stencil build` to generate output targets.

### `sds-vue-components`

- **Description**: This package provides **Vue 3**-compatible versions of the Web Components.
- **Technology**: Uses Stencil's `@stencil/vue-output-target` to wrap Web Components in Vue components.
- **Exports**: A set of typed **Vue Components** and a **Vue plugin** that registers all components globally.
- **Installation**: Can be used as a standalone npm package in Vue projects.

### `sds-react-components`

- **Description**: This package provides **React** bindings for the Web Components.
- **Technology**: Uses `@stencil/react-output-target` to generate React wrapper components.
- **Exports**: A set of typed **React components** that wrap the Web Components.
- **Installation**: Can be used as a standalone npm package in React projects.

### `sds-angular-components`

- **Description**: This package provides **Angular** bindings for the Web Components.
- **Technology**: Uses `@stencil/angular-output-target` to generate Angular components.
- **Exports**: An **Angular module** (`SdsAngularComponentLibraryModule`) to import in Angular apps. View the example app to see this live in action.
- **Installation**: Can be installed and used in Angular projects.

### `sds-figma-code-connect`

- **Description**: This package provides logic for code connect across multiple different output targets. This is what allows devs to view proper code snippets from within Figma across multiple different frameworks.
- **Technology**: Uses `@figma/code-connect` to connect to and leverage figma's code connect api.

---
