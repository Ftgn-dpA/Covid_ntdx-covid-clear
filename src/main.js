import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as G2 from '@antv/g2plot'

import router from './router'
import store from './store'
import winResize from '@/assets/scripts/util/winResize';
import scrollTable from '@/assets/scripts/util/scrollTable';
import scrollTableDelay from '@/assets/scripts/util/scrollTableDelay';
import require from '@/assets/scripts/util/require';
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$winResize = winResize;
Vue.prototype.$scrollTable = scrollTable;
Vue.prototype.$scrollTableDelay = scrollTableDelay;
Vue.prototype.$requireModul = require;

Vue.prototype.$G2 = G2;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
