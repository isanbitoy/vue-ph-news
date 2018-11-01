import Vue from 'vue';
import Router from 'vue-router';

import home from '@/pages/Home.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: home }
];

export default new Router({
  routes,
  mode: 'history',
});