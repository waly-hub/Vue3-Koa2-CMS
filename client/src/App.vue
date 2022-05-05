<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue"
</script>

<template>
  <router-view></router-view>
</template>

<style lang="less">
// @import "@/assets/style/globar.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @fontColor;
  margin-top: 60px;
}
</style>
