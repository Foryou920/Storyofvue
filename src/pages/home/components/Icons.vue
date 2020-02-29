<template>
  <div class="icons">
    <swiper>
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
  data: function() {
    return {
      iconList: [
        {
          id: "0001",
          imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },{
          id: "0002",
          imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png",
          desc: "万龙滑雪"
        },{
          id: "0003",
          imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
          desc: "故宫"
        },{
          id: "0004",
          imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png",
          desc: "静之湖滑雪"
        },{
          id: "0005",
          imgUrl:"https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "一日游"
        },{
          id: "0006",
          imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png",
          desc: "古北水镇"
        },{
          id: "0007",
          imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png",
          desc: "北京滑雪"
        },{
          id: "0008",
          imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png",
          desc: "陶然亭冰雪"
        },{
          id: "0009",
          imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
          desc: "泡温泉"
        },{
          id: "0010",
          imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
          desc: "中国马镇"
        }
      ]
    };
  },
  computed: {
    // 将页面分为开，8个为一页
    pages: function() {
      const pages = [];
      this.iconList.forEach((item, index) => {
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
