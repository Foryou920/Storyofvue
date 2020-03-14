<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet
      :cities="cities"
      @Change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
// 引入组件和插件
import CityHeader from "./components/header";
import CitySearch from "./components/search";
import CityList from "./components/list";
import CityAlphabet from "./components/Alphabet";
import axios from "axios";

export default {
  name: "City",
  components: {
    CityHeader: CityHeader,
    CitySearch: CitySearch,
    CityList: CityList,
    CityAlphabet: CityAlphabet
  },
  data: function() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  methods: {
    // AJAX
    getCityInfo: function() {
      axios.get("/api/city.json").then(this.getCityInfoSucc);
    },
    getCityInfoSucc: function(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    // 监听到Change事件触发handleLetterChange方法
    handleLetterChange: function(Letter) {
      // 将Alphabet组件传递来的数据赋予父组件中的letter，这里记录了被点击的元素
      // 这个值同时传递给了List组件，这个组件中有一个watch监听器
      this.letter = Letter;
    }
  },
  mounted: function() {
    this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped></style>
