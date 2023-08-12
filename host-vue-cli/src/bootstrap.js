import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'remote/commonStyle'

new Vue({
  render: h => h(App),
}).$mount('#app')
