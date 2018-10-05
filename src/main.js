import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import FlagIcon from 'vue-flag-icon'
import store from './store/store'
import NewsNavigation from './components/NewsNavigation.vue'
import NewsFooter from './components/NewsFooter.vue'

Vue.config.productionTip = false
Vue.use(FlagIcon);
Vue.component('news-navigation', NewsNavigation);
Vue.component('news-footer', NewsFooter);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
