<template>
  <v-app>
    <v-content>
      <HelloWorld :title="message" v-on:send-event="acceptEvent"/>
      <h2>{{ greet }}</h2>
      <h2>{{ message }}</h2>
    </v-content>
    <v-content>
      <TestComponent>
        <li slot="a">
          通常はここのテキストは消えます。嵌め込んで利用するにはslotを使います。
        </li>
      </TestComponent>
    </v-content>
  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld';
  import TestComponent from './components/TestComponent'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      TestComponent
    },
    data: function () {
      return {
        message: "おはようございます",
        greet: "今日の挨拶"
      }
    },
    methods: {
      acceptEvent(accept){
        this.greet = accept 
      }
    }
  };
</script>
