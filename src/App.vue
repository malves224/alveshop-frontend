<template>
  <div id="app">
      <AlertVue
        :message="getAllert.message"
        :variant="getAllert.variant"
        :open="getAllert.isOpen"
      />
      <HeaderNav></HeaderNav>
      <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import HeaderNav from './components/HeaderNav/HeaderNav.vue';
import AlertVue from './components/widgets/alert/AlertVue.vue';

export default {
  components: { HeaderNav, AlertVue },
  computed: {
    ...mapGetters(['getAllert']),
  },
};
</script>
<style>
</style>
