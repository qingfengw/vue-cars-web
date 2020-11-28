import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 高德地图API
import "./plugin/aMap.js";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
