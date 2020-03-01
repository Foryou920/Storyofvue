<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe658;</div>
    </div>
    <div class="header-input">
      <span class="iconfont search-icon">&#xe63c;</span>输入城市景点游玩主题
    </div>
    <div class="header-right">
      {{ this.city }}<span class="iconfont">&#xe65c;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>

<style lang="stylus" scoped>
// 引入styles文件夹中的variable.styl文件
// 要在CSS中使用引入你需要在前面加个~
@import '~styles/variable.styl'
.header
    display flex
    line-height .86rem
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
        width 1.24rem
        float right
        text-align center
</style>
