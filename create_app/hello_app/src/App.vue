<template>
  <div id="app">
    <HelloWorld title="JSX?">
    </HelloWorld>
  </div>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data: function(){
    return {
      slotobjs: [
        {name:'Taro', mail:'taro@yamada'},
        {name:'Hanako', mail:'hanako@flower'},
        {name:'Sachiko', mail:'sachiko@happy'},
      ],
    };
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
</style>
