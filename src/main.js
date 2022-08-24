import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import axios from "axios";
import "bootstrap";

createApp(App).use(router).mount("#app");
