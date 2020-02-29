<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div id="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data: function() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1812/e1/28d418ecf6e535.jpg_r_640x214_77e18cdc.jpg",
          title: "情侣约会圣地",
          desc: "你听，鸟语！你闻，花香！你听，海浪。你看，我的对面，是你……"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1501/a2/a2a129584cebcadb.img.jpg_r_640x214_329ee163.jpg",
          title: "温泉不撞样",
          desc: "三亚温泉是真正与大自然同生息的热带花园"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/5e/6e13db8af6ec30.jpg_r_640x214_5c1b0fa9.jpg",
          title: "三亚必打卡",
          desc: "三亚温泉是真正与大自然同生息的热带花园"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/3e/a588a413145dbe.jpg_r_640x214_b3729b6e.jpg",
          title: "小清新帆船出海",
          desc: "完整体验驾驶帆船出海的乐趣，感受不一样的海上休闲，体验无限驰骋的空间"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1602/bf/a2ac57b8bfe7cd.jpg_r_640x214_406d4c7e.jpg",
          title: "城会玩儿游艇大趴",
          desc: "想不想和小伙伴们来一场刺激又好玩的游艇旅行，这里有最具特色的游艇大趴"
        }
      ]
    };
  }
}
</script>

<style lang="stylus" scoped>
.title
  margin-top .2rem
  line-height .8rem
  background #eeeeee
  text-indent .2rem
.item-img-wrapper
  overflow hidden
  .item-img
    width 100%
.item-info
  padding .1rem
  .item-title
    line-height .54rem
    font-size .30rem
    ellipsis()
  .item-desc
    line-height .4rem
    font-size .25rem
    color #cccccc
    ellipsis()
</style>