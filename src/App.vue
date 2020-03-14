<template>
  <div id="app">
    <!-- 保持TCP连接 -->
    <keep-alive>
      <!-- <router-view>标签会渲染路径匹配到的视图组件，例如这里的<router-view>代表的是根目录。 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style></style>
