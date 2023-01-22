export default {
  state: {
    isLogin: localStorage.getItem('token') ? true : false,
    appName: 'VueApp',
    menus: null
  },
  mutations: {
    SET_LOGIN_STATUS(state, payload) {
      state.isLogin = payload;
    },
    SET_LOGIN_INFO(state) {
      state.menus = [
        {
          title: '首页',
          path: '/'
        },
        {
          title: '任务中心',
          path: '/task'
        }
      ];
    }
  },
  actions: {
    async login({ commit }) {
      localStorage.setItem('token', 'token');
      commit('SET_LOGIN_STATUS', true);
      commit('SET_LOGIN_INFO', []);
    },
    async getUserInfo({ commit }) {
      commit('SET_LOGIN_INFO', []);
    },
    async goLogin({ commit }) {
      localStorage.clear('token');
      commit('SET_LOGIN_STATUS', false);
      commit('SET_LOGIN_INFO', []);
    }
  }
};
