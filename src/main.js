import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAliplayerV2 from 'vue-aliplayer-v2';

Vue.use(VueAliplayerV2);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
