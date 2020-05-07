<template>
  <div id="app">
    <Calc v-bind:title="message" v-on:result-event="appAction" />
    <!-- calcコンポーネントの読み込み -->
    <!-- result-eventが起きたら発火する状態にする＝関数を呼び出す -->
    <hr>
    <div><table v-html="log"></table></div>
  </div>
</template>


<script>
import Calc from './components/Calc.vue'
// 計算の部分を持ってくる


export default {
  name: 'app',
  components: {
    Calc
    // ここがよくわからない。読んでいるやつ？
  },
  data: function(){
    // dataは表示するもの
    // 今回はmessageとresultを用意
    return {
      message:'CALC',
      result:[],
    };
  },
  computed:{
    log:function() {
      // logの内容を定義
      var table = '<tr><th class="head">Expression</th><th class="head">Value</th></tr>';
      for(var i in this.result){
        // resultの配列から順に値を取り出し
        table += '<tr><td>' + this.result[i][0] + '</td><th>' 
        // 順番に出力
          + this.result[i][1] + '</th></tr>';
          // 結果にインデックスを振って順番に出力する
      }
      return table;
    }
  },
  created: function(){
    // 初期状態に関するもの
    var items = localStorage.getItem('log');
    var logs = JSON.parse(items);
    // 変換
    if (logs != null){ this.result = logs; }
  },
  methods:{
    appAction: function(exp, res) {
      // 飛んできた引数を使う（？）
      this.result.unshift([exp, res]);
      if (this.result.length > 10){
        // 保存は10まで
        this.result.pop();
      }
      var log = JSON.stringify(this.result);
      localStorage.setItem('log', log);
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 5px;
}
tr td {
  padding:5px;
  border:1px solid gray;
}
tr th {
  padding:5px;
  border:1px solid gray;
}
tr th.head {
  background-color: black;
  color:white;
}
</style>
