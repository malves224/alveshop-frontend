import Vue from 'vue';
import Vuex from 'vuex';
import allert from './modules/allert';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
    user,
  },
});
