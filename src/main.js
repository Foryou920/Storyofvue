import Vue from "vue";
import App from "./App.vue";
// 引入Vue-router组件，用于管理多页面跳转。
import router from "./router";
// 引入fastclick库，用于移除移动端点击300毫秒延迟
import fastClick from "fastclick";
// 引入VueAwesomeSwiper库，用于实现首页轮播图效果
import VueAwesomeSwiper from "vue-awesome-swiper";
// 引入Vuex创建的仓库
import store from "./store";
import "babel-polyfill";
// 引入全局CSS文件
import "styles/reset.css";
import "styles/border.css";
import "styles/iconfont.css";
import "swiper/dist/css/swiper.css";

Vue.config.productionTip = false;
// 在全局中引入fastclick库，移除移动端点击300毫秒延迟。
fastClick.attach(document.body);
// VueAwesomeSwiper是标准的Vue插件，含有install方法，所以使用Vue.use()调用更方便。
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  // 创建根Vue实例时把由Vuex创建的仓库传递进去，每一个组件都可以使用store。
  store,
  render: h => h(App)
}).$mount("#app");
