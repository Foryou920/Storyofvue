import Vue from "vue";
import Vuex from "vuex";
import state from "./state"
import mutations from "./mutations"

Vue.use(Vuex);

export default new Vuex.Store({
  state: state,
  // 不存在大量同步操作或者异步操作，所以组件可以直接调用mutations，而不需要actions转发
  // actions: {
  //   changeCity: function(ctx, city) {
  //     ctx.commit("changeCityMutations", city);
  //   }
  // },
  mutations: mutations
});
