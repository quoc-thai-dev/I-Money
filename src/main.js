import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { projectAuth } from "./configs/firebase";

import "@/assets/styles/style.css";
import "@/assets/styles/global.css";

import { registerGlobalComponent } from "@/ultils/import";

let app;

// Kiểm tra khi auth thay đổi trạng thái
projectAuth.onAuthStateChanged(() => {
  console.log("Auth change");
  if (!app) {
    // chỉ khởi tạo app 1 lần
    app = createApp(App);

    registerGlobalComponent(app);

    app.use(router);
    app.mount("#app");
  }
});
