import Vue from 'vue'
import App from './App.vue'

var vm = new Vue({
  el: '#app',
  render: h => h(App)
})

axios.get('https://www.v2ex.com/api/topics/hot.json').then(function(res){
  console.log(res)
  vm.$data.appList.push(res)
})
