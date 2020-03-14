<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated: function() {
    // 利用ref算出元素A距离组件顶端的高度
    this.startY = this.$refs["A"][0].offsetTop;
  },
  computed: {
    // 用计算属性将父组件传递过来的cities值遍历成一个列表
    letters: function() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    // 绑定三个触摸事件touchstart、touchmove、touchend
    handleLetterClick: function(e) {
      // 向外触发事件Change，并传递参数：被点击的元素
      this.$emit("Change", e.target.innerText);
    },
    handleTouchStart: function() {
      // 给touchstart添加事件修饰符.prevent，阻止默认事件，让他不能滚动
      // touchstart事件的作用并非让其滚动
      this.touchStatus = true;
    },
    handleTouchMove: function(e) {
      // 如果touchstart事件触发，这里的touchStatus为true
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          // clientY：事件发生时鼠标（手指）在浏览器的内容区域坐标
          // 79是header组件的高度
          const touchY = e.touches[0].clientY - 79;
          // 20是每个字母元素的高度
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            // 向外触发事件Change
            this.$emit("Change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd: function() {
      // 滑动结束
      this.touchStatus = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
// 应用 CSS 属性 touch-action: none; 这样任何触摸事件都不会产生默认行为，但是 touch 事件照样触发
// *
//   touch-action: none
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width .4rem
  .item
    line-height .4rem
    text-align center
    color $bgColor
</style>
