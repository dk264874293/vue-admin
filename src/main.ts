import { createApp } from "vue";
import routes from "./router/index";
import store from "./store/index";
import App from "./App.vue";

createApp(App).use(routes).use(store).mount("#app");
