<template>
  <v-app>
    <v-content>
      <HelloWorld :title="message" v-on:send-event="acceptEvent"/>
      <h2>{{ greet }}</h2>
      <h2>{{ message }}</h2>
    </v-content>
  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld';

  export default {
    name: 'App',
    components: {
      HelloWorld,
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
