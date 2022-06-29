<template>
  <div id="app">
      <AlertVue
        v-if="getAllert.isOpen"
        :message="getAllert.message"
        :variant="getAllert.variant"
        :open="getAllert.isOpen"
        :setOpen="setAllertOpen"
      />
      <HeaderNav></HeaderNav>
      <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import HeaderNav from './components/HeaderNav/HeaderNav.vue';
import AlertVue from './components/widgets/alert/AlertVue.vue';
import LocalStorage from './service/localStorage/LocalStorage';

export default {
  components: { HeaderNav, AlertVue },
  computed: {
    ...mapGetters(['getAllert', 'getUser']),
  },
  methods: {
    ...mapMutations(['setAllertOpen', 'setUser']),
  },
  beforeMount() {
    const userLocalStorage = LocalStorage.get('user');
    if (userLocalStorage) {
      this.setUser(userLocalStorage);
    }
  },
  updated() {
    const user = this.getUser;
    const userLocalStorage = LocalStorage.get('user');
    if (user.token && !userLocalStorage) {
      LocalStorage.set('user', user);
    } else {
      this.setUser(userLocalStorage);
    }
  },
};
</script>
<style>
</style>
