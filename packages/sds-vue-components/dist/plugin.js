import * as StencilVueComponents from "./components";
import { defineCustomElements } from "sds-web-components/loader";
import "../../sds-web-components/dist/sds/sds.css";
export function registerStencilComponents(app) {
    defineCustomElements(window);
    console.log("dunning inside register stencil components");
    Object.entries(StencilVueComponents).forEach(([name, component]) => {
        app.component(name, component);
    });
}
//# sourceMappingURL=plugin.js.map