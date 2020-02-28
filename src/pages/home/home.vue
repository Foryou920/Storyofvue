<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
// 组件引入
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
export default {
  //单页组件名
  name: "Home",
  // 组件注册
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper
  }
};
</script>

<style></style>
