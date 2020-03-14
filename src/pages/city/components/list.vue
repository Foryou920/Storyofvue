<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-topbottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import BScroll from "better-scroll";
import { mapState } from "vuex";

export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      // 将city映射到计算属性currentCity
      currentCity: "city"
    })
  },
  methods: {
    handleCityClick: function(city) {
      // 不存在大量同步操作或者异步操作，所以组件可以直接调用mutations，而不需要actions转发
      // this.$store.dispatch("changeCity", city);
      this.$store.commit("changeCityMutations", city);
      // 编程式导航，效果类似<router-link>
      this.$router.push("/");
    }
  },
  watch: {
    // 当父组件传递进来的值发生改变则触发监听器
    letter: function() {
      if (this.letter) {
        // 在HTML中使用ref获取到的是DOM
        const element = this.$refs[this.letter][0];
        // 使用BScroll跳转到该字母
        this.BScroll.scrollToElement(element);
      }
    }
  },
  mounted: function() {
    // 对.wrapper使用BScroll插件
    this.BScroll = new BScroll(this.$refs.wrapper);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  .title
    line-height: .54rem
    background: #eee
    padding-left: .2rem
    color: #666
    font-size: .26rem
  .button-list
    overflow: hidden
    padding: .1rem .6rem .1rem .1rem
    .button-wrapper
      float: left
      width: 33.33%
      .button
        margin: .1rem
        padding: .1rem 0
        text-align: center
        border: .02rem solid #ccc
        border-radius: .06rem
  .item-list
    .item
      line-height: .76rem
      padding-left: .2rem
</style>
