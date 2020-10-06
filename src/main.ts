import Vue from 'vue';
import App from './App.vue';
import "./style/reset.scss";
import "./style/index.scss";

import install  from "./index";
Vue.use(install)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
