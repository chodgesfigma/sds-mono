import { createApp } from "vue";
import App from "./App.vue";
import * as StencilVueComponents from "../lib/components";
import { defineCustomElements } from "../../sds-web-components/loader";
import "../../sds-web-components/dist/sds/sds.css";

// applyPolyfills().then(() => {
defineCustomElements(window);
// });

const app = createApp(App);

// Register all Stencil components globally
Object.entries(StencilVueComponents).forEach(([name, component]) => {
  app.component(name, component);
});

app.mount("#app");
