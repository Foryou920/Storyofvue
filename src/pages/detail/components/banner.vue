<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{ this.sightName }}</div>
        <div class="banner-number">
          <span class="iconfont back-icon banner-icon">&#xe638;</span>
          {{ this.gallaryImgs.length }}
        </div>
      </div>
    </div>
    <fade-animation>
      <commit-gallery
        :imgs="gallaryImgs"
        v-show="showGallery"
        @close="handleGalleryClose"
      ></commit-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommitGallery from "commom/gallery/Gallery";
import FadeAnimation from "commom/fade/FadeAnimation";

export default {
  name: "DetailBanner",
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data: function() {
    return {
      showGallery: false
    }
  },
  components: {
    CommitGallery: CommitGallery,
    FadeAnimation: FadeAnimation
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
