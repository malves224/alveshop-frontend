import Vue from 'vue';
import Vuex from 'vuex';
import allert from './modules/allert';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload
        .sort((a, b) => {
          const trueFirst = a.active ? -1 : 1;
          return ((a.active === b.active) ? 0 : trueFirst);
        });
    },
  },
  actions: {
    loadingProducts({ commit }) {
      // eslint-disable-next-line no-underscore-dangle
      this._vm.$productService.findAll()
        .then(({ data }) => commit('setProducts', data));
    },
  },
  modules: {
    allert,
    user,
  },
});
