import _ from 'lodash';
import * as fs from 'fs-extra';
import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

Object.defineProperty(Vue.prototype, '$_', { value: _ });
Object.defineProperty(Vue.prototype, '$fs', { value: fs });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
