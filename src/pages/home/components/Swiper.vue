<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" v-bind:key="item.id">
        <img class="Swiper-img" v-bind:src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data: function() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  },
  // 避免出现逻辑性的代码
  computed: {
    showSwiper: function() {
      return this.list.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
// .wrapper下的子组件里面只要出现.swiper-pagination-bullet-active就插入以下样式
.wrapper >>> .swiper-pagination-bullet-active
  background #ffffff !important
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%
  background #eeeeee
.Swiper-img
  width 100%
  height 2.34rem
</style>
