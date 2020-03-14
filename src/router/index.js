import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      // 路由路径
      path: "/",
      // 命名路由
      name: "Home",
      // 映射组件到路由，按需加载
      component: () => import("@/pages/home/home")
    },
    {
      path: "/city",
      name: "City",
      component: () => import("@/pages/city/City")
    },
    {
      // 动态路由参数，以冒号标记
      path: "/detail/:id",
      name: "Detail",
      component: () => import("@/pages/detail/Detail")
    }
  ],
  // 切换路由时让页面滚动到初始位置
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
