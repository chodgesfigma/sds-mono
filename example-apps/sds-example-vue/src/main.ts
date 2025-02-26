import "./assets/main.css";
// Only step to be able to use our components within a Vue repo,
// is to register them prior to mounting the app.
import { registerStencilComponents } from "sds-vue-components";

import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

registerStencilComponents(app);

app.mount("#app");
