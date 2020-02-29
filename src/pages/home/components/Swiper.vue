<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" v-bind:key="item.id">
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
  data: function() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/0b26e9760c2673c63c05e1efce1275ea.jpg_750x200_495c0a72.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/64d0b9e87e685d864add20d75c81bcc9.jpg_750x200_7a0937d7.jpg"
        }
      ]
    };
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
