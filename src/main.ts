import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import "./assets/tailwind.css";
import App from "./App.vue";

// vue-loader
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// Notifications
import Notifications from "@kyvg/vue3-notification";
// Common components
import AppButton from "./components/AppButton.vue";
import AppSelect from "./components/AppSelect.vue";
import AppInput from "./components/AppInput.vue";
import AppContainer from "./components/AppContainer.vue";

library.add(fas);
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(VueLoading);
app.use(Notifications);
app.component("fa", FontAwesomeIcon);
app.component("AppButton", AppButton);
app.component("AppSelect", AppSelect);
app.component("AppInput", AppInput);
app.component("AppContainer", AppContainer);
app.mount("#app");
