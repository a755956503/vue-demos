import Vue from 'vue'
import App from './App.vue';
// import antdVue from 'ant-design-vue';
import router from './router';
import store from './store';
import utilPlugin from './utils';
import './mocks';
import './assets/less/index.less';
Vue.config.productionTip = false

// Vue.use(antdVue);
Vue.use(utilPlugin);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
