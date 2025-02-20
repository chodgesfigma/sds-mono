import { createApp } from "vue";
import App from "./App.vue";
import * as StencilVueComponents from "../lib/components";
const app = createApp(App);
Object.entries(StencilVueComponents).forEach(([name, component]) => {
    app.component(name, component);
});
app.mount("#app");
//# sourceMappingURL=main.js.map