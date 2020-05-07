<template>
  <v-container>
    <p>{{ message }}</p>
    <v-btn @click="changeTitle" >ボタンです。</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data: function(){
      return {
        message: "お名前は？"

      }
    },
    methods: {
      changeTitle() {
        this.message = "こんにちは世界"
      }
    }
  }
</script>
