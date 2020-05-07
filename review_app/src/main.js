import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,

  // htmlファイルのid appではなく、vueの方
  render: h => h(App)
}).$mount('#app')
