<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
// 组件引入
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
// 插件引入
import axios from "axios";
import { mapState } from "vuex";

export default {
  //单页组件名
  name: "Home",
  // 组件注册
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons: HomeIcons,
    HomeRecommend: HomeRecommend,
    HomeWeekend: HomeWeekend
  },
  // 组件中的data必须是一个函数
  data: function() {
    return {
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    getHomeInfo: function() {
      // 使用axios的get方法发送ajax请求，并且执行getHomeInfoSucc方法
      axios.get("/api/index.json?city=" + this.city).then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc: function(res) {
      // 将获取的数据赋予自有变量
      res = res.data;
      // 判断数据是否存在
      if (res.ret && res.data) {
        // 将获取的数据赋予自有常量
        const data = res.data;
        // 用自有常量传递给$data中的值
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        // 发现一个彩蛋：如果这里没有在data指定weekendList，实际上也是可以直接操纵传值数据的
        this.weekendList = data.weekendList;
      }
    }
  },
  // Vue生命周期钩子：在实例渲染之后，优先级在activated之上
  mounted: function() {
    // 将city保存到lastCity中
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  // 访问使用keep-alive缓存的组件时触发：在mounted之后
  activated: function() {
    // 判断当前获取的city和之前的获取city是否相同
    if (this.lastCity !== this.city) {
      // 如果不相同，将lastCity重置，并且再次执行ajax请求
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
};
</script>

<style lang="stylus">
.HomeF
  overflow: hidden;
</style>
