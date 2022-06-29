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

export default {
  components: { HeaderNav, AlertVue },
  computed: {
    ...mapGetters(['getAllert']),
  },
  methods: {
    ...mapMutations(['setAllertOpen']),
  },
};
</script>
<style>
</style>
