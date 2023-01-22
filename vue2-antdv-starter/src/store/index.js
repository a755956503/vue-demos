import Vue from 'vue';
import Vuex from 'vuex';
import global from './global';
import task from './task';
Vue.use(Vuex);
const store = new Vuex.Store({
  ...global,
  modules: {
    task
  }
});
export default store;
