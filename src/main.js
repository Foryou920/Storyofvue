import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import fastClick from "fastclick";
// CSS文件引入
import "styles/reset.css";
import "styles/border.css";
import "styles/iconfont.css";

Vue.config.productionTip = false;
fastClick.attach(document.body);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
