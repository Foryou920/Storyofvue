<template>
  <!-- 提供两个插槽 -->
  <transition><slot></slot></transition>
</template>

<script>
// 该组件主要实现进入和退出的过渡动画
export default {
  name: "Fade"
};
</script>

<style lang="stylus" scoped>
.v-enter, .v-leave-to
  opacity: 0
.v-enter-active, .v-leave-active
  transition: opacity .5s
</style>
