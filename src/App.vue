<!--
 * @Author: your name
 * @Date: 2021-04-19 16:46:29
 * @LastEditTime: 2021-04-19 17:29:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \common-components-iview\src\App.vue
-->
<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
