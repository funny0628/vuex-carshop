import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'

import {router} from './router/index.js'
import './assets/base.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css'; 

Vue.config.productionTip = false
Vue.use(iView);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
