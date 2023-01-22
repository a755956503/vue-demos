import Vue from "vue";
// import Antd from 'ant-design-vue';
// import App from "./App5.vue";
// import App from './views/com/Trainsition.vue';
import App from './views/com/Transition.vue';
import router from "./router";
import store from "./store";
import './assets/index.less';
// import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;
// Vue.use(Antd);

new Vue({
  name: 'VueTop',
  router,
  store,
  render: h => h(App)
}).$mount("#app");
