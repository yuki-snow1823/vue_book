<template>
  <v-container>
    <p>{{ message }}</p>
    <p>{{ title }}</p>
    <v-btn @click="changeTitle">普通のボタンです。</v-btn>
    <v-btn @click="changeWord">親にイベントを渡すボタンです。</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      title: String
    },
    data: function () {
      return {
        message: "こんばんは"

      }
    },
    methods: {
      changeTitle() {
        this.message = "こんにちは"
      },
      changeWord() {
        this.$emit('send-event',this.message)
        // 名前 + 引数(実際に送るものを書く)
      }
    }
  }
</script>
