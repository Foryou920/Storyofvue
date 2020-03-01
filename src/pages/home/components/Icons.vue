<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data: function() {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    // 将页面分为开，8个为一页
    pages: function() {
      const pages = [];
      this.list.forEach((item, index) => {
        // 取余
        const page = Math.floor(index / 8);
        // 判断数组是否为空，为空则创建二维数组
        if (!pages[page]) {
          pages[page] = [];
        }
        // 每循环一遍就往二维数组里push数据
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
@import '~styles/mixins.styl'
// .icons下的子组件里面只要出现.swiper-container就插入以下样式
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icons
  margin-top .1rem
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      right 0
      bottom .44rem
      left 0
      box-sizing border-box
      padding .1rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      color $darkTextColor
      text-align center
      // 如果desc超出长度则显示 ...
      ellipsis()
</style>
