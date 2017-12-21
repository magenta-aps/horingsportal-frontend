import Vue from 'vue'
import App from './App'
import router from './router'
import store from './services/Store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
