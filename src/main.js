import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './quasar'


Vue.config.productionTip = false
import Notifications from 'vue-notification'
Vue.use(Notifications)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
