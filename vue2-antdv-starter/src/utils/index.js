import global from './mixins/global';

export default {
  install(Vue) {
    Vue.mixin(global);
  }
}