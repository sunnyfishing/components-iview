/*
 * @Author: your name
 * @Date: 2021-04-19 16:46:29
 * @LastEditTime: 2021-04-22 14:54:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \common-components-iview\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import iView from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(iView)

new Vue({
  render: h => h(App),
}).$mount('#app')
