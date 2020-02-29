<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- 这里的border-bottom是reset.css中的样式，为li标签下方添加1像素边框 -->
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data: function() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_250x250_50c99cf3.jpg",
          title: "八达岭长城",
          desc: "不到长城非好汉，将壮观诠释到完美"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1809/10/10d6568ad3ad4bb5a3.img.jpg_200x200_c6c1ed20.jpg",
          title: "亚龙湾热带天堂森林公园",
          desc: "您身边的天然森林氧吧"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1812/66/664b5e8f234743dda3.water.jpg_200x200_b7e57d57.jpg",
          title: "三亚千古情景区",
          desc: "置身传统黎村，领略黎族风情"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1802/1a/1a20dce5e03251cea3.img.jpg_200x200_3132798c.jpg",
          title: "亚特兰蒂斯失落的空间水族馆",
          desc: "失落的空间水族馆邀您一同揭开千年之谜"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1811/2f/2f9b29981c3c9f85a3.img.jpg_200x200_9d91fda5.jpg",
          title: "蜈支洲岛",
          desc: "带上心爱的人来浪漫情人岛吧~"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.title
  margin-top .2rem
  line-height .8rem
  background #eeeeee
  text-indent .2rem
.item
  overflow hidden
  display flex
  height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #cccccc
      ellipsis()
    .item-button
      line-height .44rem
      margin-top .16rem
      background #ff9300
      padding 0 .2rem
      border-redius .06rem
      color #ffffff
</style>
