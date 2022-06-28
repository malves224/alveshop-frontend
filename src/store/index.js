import Vue from 'vue';
import Vuex from 'vuex';
import allert from './modules/allert';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    products: {},
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    allert,
  },
});
