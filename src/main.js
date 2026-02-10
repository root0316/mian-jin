import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/utils/vant-ui'
import ArticleItem from '@/components/ArticleItem.vue'
import { Cell, Tabbar, TabbarItem, Form, Field, NavBar, Toast } from 'vant'
Vue.use(Cell)
Vue.use(Form)
Vue.use(Field)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Toast)
Vue.component('ArticleItem', ArticleItem)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
