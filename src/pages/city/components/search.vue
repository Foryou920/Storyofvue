<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  methods: {
    handleCityClick: function(city) {
      // Vuex 通过commit直接操作mutations
      this.$store.commit("changeCityMutations", city);
      // 跳转回根路径
      this.$router.push("/");
    }
  },
  data: function() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    // 当列表长度为零，hasNoData则为true
    hasNoData: function() {
      return !this.list.length;
    }
  },
  watch: {
    keyword: function() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        // 搜索结果是一个数组
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              // 用indexOf方法查找关键词是否存在
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              // 如果存在将value放入结果数组
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted: function() {
    this.BScroll = new BScroll(this.$refs.search);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
*
  touch-action none
.search
  height .72rem
  padding 0 .1rem
  background : $bgColor
  .search-input
    box-sizing border-box
    width 100%
    height .62rem
    padding 0 .1rem
    line-height .62rem
    text-align center
    border-radius .06rem
    color #666666
.search-content
  z-index 1
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eeeeee
  .search-item
    line-height .62rem
    padding-left .2rem
    background #ffffff
    color #666666
</style>
