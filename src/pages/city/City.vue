<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
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
      hotCities: []
    };
  },
  methods: {
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
    }
  },
  mounted: function() {
    this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped></style>
