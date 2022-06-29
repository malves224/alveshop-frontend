export default {
  state: {
    allert: {
      variant: 'info',
      isOpen: false,
      message: '',
    },
  },
  getters: {
    getAllert(state) {
      return state.allert;
    },
  },
  mutations: {
    setAllert(state, { variant, isOpen, message }) {
      state.allert = {
        variant, isOpen, message,
      };
    },
    setAllertOpen(state, payload) {
      state.allert.isOpen = payload;
    },
  },
  actions: {
    openAlert({ commit }, { message, variant }) {
      commit('setAllert', { message, variant, isOpen: true });
    },
  },
};
