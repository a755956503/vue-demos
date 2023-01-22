import request from '@/utils/request';
export default {
  namespaced: true,
  state: {
    // taskInfo: {
    //   name: 'task1'
    // }
    taskInfo: {}
  },
  getters: {
    taskInfo: state => state.taskInfo
  },
  mutations: {
    SET_TASk(state, payload) {
      state.taskInfo = payload || {};
    }
  },
  actions: {
    async getTask({ commit }) {
      try {
        const { data } = await request({ url: '/task' });
        commit('SET_TASk', data.data);
      } catch (error) {
        console.log('error', error);
      }
    }
  }
};
