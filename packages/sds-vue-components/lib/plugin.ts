import { App as VueApp } from "vue";
import * as StencilVueComponents from "./components";
import { defineCustomElements } from "sds-web-components/loader";
import "../../sds-web-components/dist/sds/sds.css";

export function registerStencilComponents(app: VueApp) {
  defineCustomElements(window);
  Object.entries(StencilVueComponents).forEach(([name, component]) => {
    app.component(name, component);
  });
}
