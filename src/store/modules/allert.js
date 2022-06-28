export default {
  state: {
    allert: {
      variant: 'danger',
      isOpen: true,
      message: 'trestes',
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
      console.log(variant);
      commit('setAllert', { message, variant, isOpen: true });
    },
  },
};
