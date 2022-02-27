import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import "./assets/tailwind.css";

import App from "./App.vue";
import AppButton from "./components/AppButton.vue";
import AppSelect from "./components/AppSelect.vue";
import AppInput from "./components/AppInput.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.component("AppButton", AppButton);
app.component("AppSelect", AppSelect);
app.component("AppInput", AppInput);
app.mount("#app");
