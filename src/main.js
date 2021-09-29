import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from 'vue-i18n'
import messages from "./localization"
import vSelect from 'vue-select'

Vue.use(VueI18n)
Vue.component('v-select', vSelect)

import "./assets/scss/main.scss"
import 'vue-material-design-icons/styles.css';
import 'vue-select/dist/vue-select.css';

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
  fallbackLocale: 'en', // set fallback locale
})

// Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
