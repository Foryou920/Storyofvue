export default {
  // 这个方法需要两个参数，第一个参数指的是所有公用数据（即Vuex.Store中定义的state），第二个参数是传递进来的参数
  changeCityMutations: function(state, city) {
    state.city = city;
    // localStorage使用需要搭配try-catch，因为有些浏览器可能关闭了localStorage，例如隐身模式
    try {
      if (localStorage.city) {
        // localStorage是HTML5提供的本地存储API
        localStorage.city = city;
      }
    } catch (e) {}
  }
};
