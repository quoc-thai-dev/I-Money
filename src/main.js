import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/styles/style.css";
import "@/assets/styles/global.css";

import { registerGlobalComponent } from "@/ultils/import";

const app = createApp(App);

registerGlobalComponent(app);

app.use(router);
app.mount("#app");
