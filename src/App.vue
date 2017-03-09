<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1></h1>
    <h2>V2EX List</h2>
    <ul id="list">
      <li v-for="item in appList"><a :href="item.url" data-id="item.id">{{item.title}}</a><span class="num">{{item.replies}}</span><span class="timestamp">{{showDate(item.created)}}</span>
      <div class="content">
        <div class="content_face" :title="item.member.username"><img :src="item.member.avatar_mini" @mouseenter="bigImg(item.member.avatar_large)" :alt="item.member.username"></div>
        <p>{{item.content}}</p>
      </div>
      </li>
    </ul>
  </div>
</template>

<script>
import formatTime from './service/formatTime.js';
export default {
  name: 'app',
  data () {
    return {
      appList: [{
        title:'demo'
      }]
    }
  },
  created:function(){
    this.getList();
  },
  methods:{
    getList(){
      var vm = this;
      axios.get('/api/topics/hot.json').then(function(res){
        if(res.status === 200){
          vm.$data['appList'] = res.data;
        }
      })
    },
    bigImg(url){
      console.log(url)
    },
    showDate(time){
      return formatTime.format(time)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
  font-size: 16px;
}
#app .num{
  font-size:11px;
  border-radius:4px;
  background:#eee;
  color:#ccc;
  vertical-align:3px;
  margin-left:5px;
  padding:2px 5px;
}
#app .timestamp{
  font-size:11px;
  vertical-align:3px;
  margin-left:10px;
}
#app .content{
  font-size:12px;
  height:4em;
  text-overflow:ellipsis;
  overflow:hidden;
}
#app .content_face{
  float:left;
  margin-right:10px;
}
ul {
  width:70%;
  margin:0 auto;
  text-align:left;
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
  padding-bottom:20px;
}

a {
  color: #42b983;
}
</style>
