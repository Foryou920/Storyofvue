<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
// 组件引入
import HomeHeader from "./components/Header";
export default {
  //单页组件名
  name: "Home",
  // 组件注册
  components: {
    HomeHeader: HomeHeader
  }
};
</script>

<style></style>
