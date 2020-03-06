<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="https://img1.qunarzz.com/sight/p0/1602/a2/a2db6aea3707663a90.img.jpg_600x330_95322c03.jpg"
      />
      <div class="banner-info">
        <div class="banner-title">梦幻百花洲</div>
        <div class="banner-number">
          <span class="iconfont back-icon banner-icon">&#xe638;</span>
          39
        </div>
      </div>
    </div>
    <commit-gallery
      :imgs="imgs"
      v-show="showGallery"
      @close="handleGalleryClose"
    ></commit-gallery>
  </div>
</template>

<script>
import CommitGallery from "commom/gallery/Gallery";

export default {
  name: "DetailBanner",
  data: function() {
    return {
      showGallery: false,
      imgs: [
        "http://img1.qunarzz.com/sight/p0/1602/a2/a2db6aea3707663a90.img.jpg_r_800x800_f06fc71d.jpg",
        "http://img1.qunarzz.com/sight/p0/1602/ec/ecf4f576181c285790.img.jpg_r_800x800_c2833cda.jpg"
      ]
    }
  },
  components: {
    CommitGallery: CommitGallery
  },
  methods: {
    handleBannerClick: function() {
      this.showGallery = true;
    },
    handleGalleryClose: function() {
      this.showGallery = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #ffffff
    background-image linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      height .32rem
      line-height .32rem
      margin-top .14rem
      padding 0 .4rem
      border-radius .2rem
      background rgb(0, 0, 0, 0)
      font-size .24rem
      .banner-icon
        font-size .24rem
</style>
