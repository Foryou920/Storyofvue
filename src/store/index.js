import Vue from "vue";
import Vuex from "vuex";
// 引入外部state文件
import state from "./state";
// 引入外部mutations文件
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: state,
  // 不存在大量同步操作或者异步操作，所以组件可以直接调用mutations，而不需要actions转发
  // actions: {
  //   定义的方法接受两个参数，一个是ctx，一个是city
  //   changeCity: function(ctx, city) {
  //     ctx.commit("changeCityMutations", city);
  //   }
  // },
  // 调用mutations方法，这里的mutations是一个外部引入的文件
  mutations: mutations
});
