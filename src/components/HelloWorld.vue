<!--
 * @Author: your name
 * @Date: 2021-04-19 16:46:29
 * @LastEditTime: 2021-04-22 10:21:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \common-components-iview\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <a href="https://router.vuejs.org" target="_blank" rel="noopener">{{item.name}}</a>
      </li>
    </ul>
    <NewEdit/>
  </div>
</template>

<script>

import NewEdit from '../pages/NewEdit'

export default {
  name: 'HelloWorld',
  components:{
    NewEdit
  },
  props: {
    msg: String
  },
  data(){
    return {
      list:[
        {name:'a',path:'a'},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  margin-left:20px
}
a {
  color: #42b983;
  font-size: 24px;
}
</style>
