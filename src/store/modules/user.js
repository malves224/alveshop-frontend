import LocalStorage from '@/service/localStorage/LocalStorage';

export default {
  state: {
    user: {
      id: '',
      email: '',
      name: '',
      token: '',
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    setUser(state, payload) {
      const {
        id, email, name, token,
      } = payload;
      state.user = {
        id, name, email, token,
      };
    },
  },
  actions: {
    setUserBindingLocalStorage({ commit }, payload) {
      const {
        id, email, name, token,
      } = payload;
      const user = {
        id, name, email, token,
      };
      commit('setUser', user);
      LocalStorage.set('user', user);
    },
  },
};
