import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/utils/vant-ui'
import { Tabbar, TabbarItem, Form, Field, NavBar } from 'vant'
Vue.use(Form)
Vue.use(Field)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
