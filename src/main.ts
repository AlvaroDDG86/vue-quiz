import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import "./assets/tailwind.css";

import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.mount("#app");
