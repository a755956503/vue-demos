import Vue from 'vue';
import Router from 'vue-router'
import routes from './routes';
import store from '../store';
Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes
});

// const addRoutes = (menus) => {
//   router.addRoute();
// }

// let isInitedRoute = false;
router.beforeEach(async (to, from, next) => {
  // 获取登录状态，可以是异步接口查询
  const isLogin = store.state && store.state.isLogin;
  if (!isLogin) {
    if (to.path === '/login') {
      next();
    } else {
      next('/login');
    }
  } else {
    // if (!isInitedRoute) {
    //   const menus = store.state.menus;
    //   addRoutes(menus);
    //   isInitedRoute = true;
    // }
    if (to.path === '/login') {
      next('/');
    } else {
      next();
    }
  }
});
export default router;
