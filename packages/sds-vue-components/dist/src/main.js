import { createApp } from "vue";
import App from "./App.vue";
import * as StencilVueComponents from "../lib/components";
import { defineCustomElements } from "../../sds-web-components/loader";
import "../../sds-web-components/dist/sds/sds.css";
defineCustomElements(window);
const app = createApp(App);
Object.entries(StencilVueComponents).forEach(([name, component]) => {
    app.component(name, component);
});
app.mount("#app");
//# sourceMappingURL=main.js.map