<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe658;</div>
    </div>
    <div class="header-input">
      <span class="iconfont search-icon">&#xe63c;</span>输入城市景点游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!-- 来自Vuex中的state -->
        {{ this.city }}<span class="iconfont">&#xe65c;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
// mapState是Vuex提供的一个API
import { mapState } from "vuex";

export default {
  name: "HomeHeader",
  computed: {
    // 将公用数据city映射到组件的计算属性中
    ...mapState(["city"])
  }
};
</script>

<style lang="stylus" scoped>
// 引入styles文件夹中的variable.styl文件
// 要在CSS中使用引入你需要在前面加个~
@import '~styles/variable.styl'

.header
    display flex
    line-height $headerHeight
    background $bgColor
    color #ffffff
    .header-left
        width .64rem
        float left
        margin-left .1rem
        .back-icon
          text-align center
          font-size .4rem
    .header-input
        flex 1
        height .64rem
        line-height .64rem
        margin-top .12rem
        margin-left .1rem
        padding-left .2rem
        background #ffffff
        border-radius .1rem
        color #cccccc
        .search-icon
          margin-right .1rem
    .header-right
        min-width 1.04rem
        padding 0 .1rem
        float right
        text-align center
        color #ffffff
</style>
