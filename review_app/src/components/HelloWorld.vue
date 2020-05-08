<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="2">
        <v-btn @click="changeTitle">タイトル変更</v-btn>
      </v-col>
      <v-col cols="12" md="2">
        <v-btn @click="changeWord">親にイベントを渡す</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <input type="text" v-model="test">
      <input type="number" v-model="calc">
      <p>watchの結果：{{ watchTest }}</p>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      // バリデーションをかけることもできる
      title: {
        type: String,
        // default: "デフォルト値の設定もできる"
      }
    },
    data: function () {
      return {
        message: "こんばんは",
        calc: 0,
        watchTest: 0
      }
    },
    methods: {
      changeTitle() {
        this.message = "こんにちは"
      },
      changeWord() {
        this.$emit('send-event', this.message)
        // 名前 + 引数(実際に送るものを書く)
      }
    },
    computed: {
      test: {
        get: function () {
          // ゲッターは値を算出し、入力に使う
          return this.message
        },
        set: function (set) {
          // setの引数は入力された値
          // それを利用して書き換えることができる
          this.message = "change" + set 
        }
      }
    },
    watch: {
      // 同時にいろいろな場所を変更する際に有効
      calc: function(value){
        this.watchTest = value
      }
    }
  }
</script>
