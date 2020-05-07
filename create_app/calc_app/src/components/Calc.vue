<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <!-- マスタッシュ構文で表示 -->
    <hr>
    <div>
      <div><textarea v-model="fomula" cols="40" rows="5"></textarea></div>
      <!-- fomulaという値でデータバインディング（データが同期されている） -->
      <!-- 計算式の入力欄 -->


      <div><button v-on:click="doAction">CALC</button></div>
      <!-- クリックすると発火、doActionに反応する。 -->
      <!-- 計算ボタン -->
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Calc',
    // 読み込むときのファイルの名前
    props: {
      title: String,
      // プロパティとしてtitleを送る（タグに使う属性の名前）
      // （？）そのtitleを変更すると値も変わる？
      // 操作することがないから、ここで定義。関数としては定義していない
    },
    data: function () {
      return {
        message: 'Enter expression:',
        fomula: '0',
        // 式という意味、計算式か（？）
      };
      // おそらく初期値
    },
    methods: {
      // 関数を入れておく場所
      doAction: function () {
        var arr = this.fomula.trim().split('\n');
        // 入力された値に対し、改行で区切って、配列に直す。（理解）


        var last = arr.pop();
        // 配列の最後の値を取り出して変数lastに入れる。入力した計算の最後。

        
        var fn = '';
        // fnってなんだろう？
        // 多分、空の状態の受け皿を作ってる感じだと思う



        for (var n in arr) {
          // 配列の各要素に繰り返し処理を行う
          // nは多分ここで定義した
          // arrの要素にnを行う、nは今から{}で定義する

          //nの内容
          if (arr[n].trim() != '') {
            // もし配列が空っぽ（未入力）ではなかったら…
            fn += 'var ' + arr[n] + ';';
            // var + "入力された値全て" + ;をfnに入れる
          }
        }
        fn += 'return ' + last + ';';
        // 繰り返しが終わったら、return 最後のテキスト+;という形にする
        var exp = 'function f(){' + fn + '} f();';
        // expに、関数の形に代入する

        var ans = eval(exp);
        // ansとして、expに入れたテキストをスクリプトとして実行

        this.message = 'answer: ' + ans;
        // answerという言葉と一緒に排出

        var re = arr.join(';').trim();
        // 配列合体
        if (re != '') {
          // 配列がからじゃなかったら
          re += ';'
          // セミコロン をつける
        }
        re += last;
        // 最後の項目を付け加える。ここがよくわからない
        // 多分メッセージの部分担当
        // expressionの部分

        this.$emit('result-event', re, ans);
        // result-eventとしてreとansを送る
      }
    }
  }
</script>
