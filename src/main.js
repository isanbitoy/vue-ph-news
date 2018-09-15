import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import NewsHeadline from './components/NewsHeadline.vue'
import FlagIcon from 'vue-flag-icon'

Vue.config.productionTip = false
Vue.component('news-headline', NewsHeadline);
Vue.use(FlagIcon);

new Vue({
  render: h => h(App)
}).$mount('#app')
