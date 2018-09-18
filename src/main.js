import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import FlagIcon from 'vue-flag-icon'
import NewsBanner from './components/NewsBanner.vue'
import NewsHeadline from './components/NewsHeadline.vue'
import NewsTopStories from './components/NewsTopStories.vue'

Vue.config.productionTip = false
Vue.use(FlagIcon);
Vue.component('news-banner', NewsBanner);
Vue.component('news-headline', NewsHeadline);
Vue.component('news-top-story', NewsTopStories);

new Vue({
  render: h => h(App)
}).$mount('#app')
