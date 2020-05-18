
# 自分のポートフォリオ(SPA+RailsAPI)の仕組み復習

## Nuxt.js(Vue.js)が表示の際にやっていること
- 初めはHTMLをAPサーバーからロードしている  
ただし、初回だけで、以降はAPサーバーからjsonを受け取って、JSが画面の書き換えを行っている

- 画面の書き換えとは具体的には？  
Vueが仮想DOMを生成し、変化した差分だけをレンダリングする

参考  
[Vue.jsの仮想DOMのレンダリング処理はどのようにして動いているのか](https://omiend.hatenablog.jp/entry/2018/12/02/180851)

- 仮想DOMを説明しつつもっと詳しく  
実DOMはhtmlのNodeの集合。 仮想DOMも仮想Node(VNode)で形成されるツリー構造。  <br>  
根本的な考えとしてHTMLとはツリー構造であり、2つのツリー構造のdiffを算出して、それをDOMにpatchするアクションを作れば、常に最小のコストで状態遷移を表現できる。考え方はSSRと同じだから、設計と速度が両立すると言える。

参考  
[なぜ仮想DOMと言う概念が俺たちの魂を震えさせるのか](https://qiita.com/mizchi/items/4d25bc26def1719d52e6)

<img src="https://jp.vuejs.org/images/lifecycle.png">
このbeforeMountの後に差分がレンダリング(patch)される。
