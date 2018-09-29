import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import FlagIcon from 'vue-flag-icon'
import NewsBanner from './components/NewsBanner.vue'
import NewsFooter from './components/NewsFooter.vue'

Vue.config.productionTip = false
Vue.use(FlagIcon);
Vue.component('news-banner', NewsBanner);
Vue.component('news-footer', NewsFooter);

new Vue({
  render: h => h(App)
}).$mount('#app')
